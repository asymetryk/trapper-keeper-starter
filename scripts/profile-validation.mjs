// Small validator for the JSON Schema features used by this kit, not a general
// JSON Schema implementation. Generated apps can use their preferred validator.
export function validateShape(value,schema,path='$') {
  const errors=[];
  const type=Array.isArray(value)?'array':value===null?'null':Number.isInteger(value)?'integer':typeof value;
  if(schema.type&&type!==schema.type&&!(schema.type==='number'&&type==='integer'))return [`${path}: expected ${schema.type}`];
  if(schema.enum&&!schema.enum.includes(value))errors.push(`${path}: invalid choice`);
  if(schema.minLength&&value.length<schema.minLength)errors.push(`${path}: too short`);
  if(type==='object'){
    for(const key of schema.required||[])if(!Object.hasOwn(value,key))errors.push(`${path}.${key}: required`);
    for(const [key,item]of Object.entries(value)){
      if(!schema.properties?.[key]){if(schema.additionalProperties===false)errors.push(`${path}.${key}: unexpected field`);}
      else errors.push(...validateShape(item,schema.properties[key],`${path}.${key}`));
    }
  }
  if(type==='array'){
    if(schema.minItems&&value.length<schema.minItems)errors.push(`${path}: too few items`);
    if(schema.uniqueItems&&new Set(value.map(v=>JSON.stringify(v))).size!==value.length)errors.push(`${path}: duplicate items`);
    value.forEach((item,i)=>errors.push(...validateShape(item,schema.items,`${path}[${i}]`)));
  }
  return errors;
}
export function validateProfile(profile,schema){
  const errors=validateShape(profile,schema);
  if(errors.length)return errors;
  try{new Intl.DateTimeFormat(profile.locale.dateLocale,{timeZone:profile.locale.timeZone}).format();}catch{errors.push('locale: invalid locale or timezone');}
  if(profile.showAll&&profile.modes.length<2)errors.push('showAll requires two selected modes');
  if(profile.modules.includes('action-queue')&&!profile.modules.includes('tasks'))errors.push('action queue requires tasks');
  if(profile.organization==='custom'&&!profile.customTabs.length)errors.push('custom organization requires tabs');
  if(profile.appearance.resize&&!profile.appearance.rearrange)errors.push('resize requires rearrange');
  if(profile.privacy.sharedWork&&profile.privacy.use==='solo')errors.push('shared work requires shared use');
  const hasHabits=profile.modules.includes('habits');
  if(hasHabits&&(profile.habits.tracking!=='dated-checkins'||profile.habits.schedule==='off'))errors.push('selected habits require dated check-ins and a schedule');
  if(!hasHabits&&(profile.habits.tracking!=='disabled'||profile.habits.schedule!=='off'||profile.habits.showStreaks))errors.push('unselected habits must be disabled');
  if(profile.habits.showStreaks&&['undecided','not-applicable'].includes(profile.habits.skipPolicy))errors.push('streak display requires an agreed skip policy');
  if(profile.platform==='airtable'&&profile.devices.some(d=>d!=='desktop-web'))errors.push('Airtable custom element mobile capability must be resolved before this profile is ready');
  return errors;
}
