# Repro for #6453

## Versions

firebase-tools: v12.7.0\n
node: v18.16.1

## Steps to reproduce the issue

1. Run `firebase functions:secrets:set SECRET_MESSAGE --project <project_id>`
   - Enter a value for SECRET_MESSAGE
1. Run `firebase deploy --project <project_id>`
   - Functions deploy without any issues
1. Run `firebase functions:secrets:set SECRET_MESSAGE --project <project_id>` and redeploy
   - Enter a value for SECRET_MESSAGE
   - Do you want to re-deploy the functions and destroy the stale version of secret SECRET_MESSAGE? (Yes)
1. An error is raised

```
Error: Failed to update function projects/<project_id>/locations/<project_location>/functions/modifyUser
```

## Notes:

Redeploying the functions via `firebase deploy --project <project_id>` raises no errors, and applies the latest version of the secrets.
