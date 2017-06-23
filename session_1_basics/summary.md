# Session 1 summary

## What is Git?

### What is a Distributed Version Control System?

## Why Git is that powerful?

- Because of its branching model.

### How do the Git branching model works?

#### Git graph (a story about ancestors)

#### Git commit, whats inside?

- comparison with AVI format.

#### Different graph edges, different stories.

#### Understanding branches as references

- Clearify that a branch IS NOT a bunch of commits.

#### There are more references?

- HEAD
- Tags

#### Why this complicated system makes sense?

- Performant
- Flexible
- Collaborative

## Building the Git graph

- Change our mindset, we are building a graph, made of changes

### Introducing changes to the graph

#### File states

- Tracked ([Tracked files are files that were in the last snapshot](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository))

- Untracked (Untracked files are everything else – any files in your working directory that were not in your last snapshot and are not in your staging area.)

#### Git areas

- Moving CHANGES across areas.

## Syncing different graphs

### As many remotes as you want

Not our case.

### From remote to local
- Fetch
- Pull

### From local to remote
- Push (the other way around)
    - Force

### What happen with orphan references? (Garbage collector)