
[init clone of repository]
- git clone {url of repository}

[set the user/pwd for commit]
- search and edit the .git/config file; search for the [remote "origin"]   
  [remote "origin"]
        url = https://github.com/testingfy/testingfy-client.git
        url = https://{user}:{pwd}@github.com/.......

[switch to a branch (no matter the branch exists or not]
- git checkout -b {branch-name}

[initial set upStream (e.g. branch testing-branch-concept-1)]
- git push --set-upstream origin testing-branch-concept-1


