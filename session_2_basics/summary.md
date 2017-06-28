
- Mantenir log net:
    - Why?
        - Log must explain a history about the code
            - Help us to find bugs
            - Understand better the code and how it grows
            - Know why someone made what
        - Branches = asynchronicity ?? (exemple problemes merge)
    - How? (good practices)
        - Make small and self-explanatory commits
            - Partial adds (explicar inconvenients)
        - Update branches using rebase (Rebase vs.Merge)
            - Fetch vs. pull
        - Clean it before showing it
            - Rebase interactiu (com i quan fer-lo)
                - edit
                - squash
                - etc…
            - Change comments: Amend, reset
        - Clean it after showing it
            - Force push (inconvenients i problemàtiques)
    - Troubleshooting
        - Merge conflicts
            - With merge (just PR) (merge state)
            - With rebase (rebase state)
        - Commit in the wrong branch
            - Cherry-pick
        - Someone have rebased my branch
        - I have created my branch from the wrong place
        - Revert (last option)
        - Explain the problems you had…