# Another stack: preserve the product contract

Record the user's reasons and chosen stack in the build brief. Reuse an official
or well-maintained foundation when it meets the need. Verify:

- [ ] Supported UI/runtime libraries and deployment environment.
- [ ] Authenticated identity and server-enforced read/write ownership.
- [ ] Stable IDs, relationships, constraints, pagination and date semantics.
- [ ] Domain adapter operations with explicit permissions and field allowlists.
- [ ] Per-user versioned preferences, concurrent saves and error recovery.
- [ ] Idempotent task/habit actions and a conflict/retry policy.
- [ ] Secret storage, attachment handling, backups and reversible migrations.
- [ ] Actual browser preview and the selected-module acceptance checklist.

Do not force Airtable concepts such as bases and field IDs into a relational
stack, or assume SQL constraints exist in a no-code platform. Preserve the user
jobs and behavior while adapting the storage and delivery mechanics.
