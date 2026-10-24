Help me build a fresh custom binder-style productivity cockpit in this Airtable
base using the attached Trapper Keeper Starter recipe and mockup image.

First run the preference interview in START_HERE.md. Ask what modules I want,
whether I use PARA, Work/Life modes, themes, habits, journaling, and whether I
need mobile. Do not assume existing bases, syncs, migration, or a fixed schema.
Wait for my answers and summarize a small build plan before creating tables.

After I approve the plan, build an **AI-generated custom interface element**,
with the binder appearance in the mockup, rather than silently substituting a
standard list page. If I prefer standard native pages or need a mobile companion,
propose that explicitly. Use only the modules I selected.

Discover actual table/field IDs after creation. Configure selected tables/fields
in the element's Data panel and allowed inline actions. Build a custom task
drawer with useful editable fields and previous/next controls where supported.
Done saves pending edits and completion metadata together, then advances only
after success; failures keep the task and draft. Ordinary field edits have an
explicit Save action. Keep derived fields read-only. Configure useful record-detail
pages for other selected entities. Create
fictional seed records only when approved, and label them clearly.

Persist each authenticated user's runtime theme, layout, mode, tabs and notebook
settings in backend table records. Browser storage may cache them. Version and
migrate configuration without resetting saved choices. Group Home + Settings,
show all enabled tabs on the binder edge, and include To-do when Tasks is selected.

For selected Journal, build one journal with one page per local date, an
entry-date mini calendar, notebook covers and optional filtered sections over the
same records. Removing a section changes navigation only. For selected Habits,
pair Today's quick checklist with monthly dated history. For selected Media,
show a current shelf backed by actual active statuses and retain the full library.

Keep the result in draft preview until I authorize publication. Show test
evidence for counts, task actions, record details/editability, navigation,
themes, backend preference readback/version upgrades, and selected journal/habit/media flows. If a feature
cannot be implemented in this Airtable surface, explain the limitation and a
specific alternative instead of claiming it works.

If you cannot read the repository/files, ask me to upload RECIPE.md and the
mockup image. A link is not proof that you have read the files.
