# Engineering Tools

As being a developer involves writing code, many developers built tools to make our lives easier. We will start with the most 'important', a code version control + collaboration tool named Git. There are many more tools other than github - From text editors to full-on IDE (integrated development environment) - that is available to us outside of this lesson documentation.

### Table of contents

- [git and github](#github)
  * [branching](#branching)
  * [pushing, pulling, pull requests](#pushing-pulling-pull-requests)
- [npm](#npm)


#### git and github

Git is, in four words, a distributed version control system. Version control system is something that allows you to track history of changes as a project evolves. Distributed means it is shared across multiple developers, and the tool is meant to be used this way.

Git is very powerful - you can make a commit (imagine it is like a save point), and you or anyone else with access to your git repository (repo for short) can go back to that point. Here's some benefits git provides that's taken from github.com.

- Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.
- Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.
- Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.

GitHub is a website that connects to this technology called git and allows users to host their projects online for others to use. There are multiple web hosts for git, such as bitbucket, gitlab - we will be using github as it's the most commonly used.

For the next upcoming parts, please have your [github assignment](https://github.com/riotcku/learntocode/blob/master/homework/GithubHW1.md) completed.

#### git commands

Using git involves being in your github directory and [using commands on your terminal](https://www.twitch.tv/videos/605668695). Here's a quick list i took from the github website, which we'll go in more detail after an overview.

-`git init` initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.
-`git clone` creates a local copy of a project that already exists remotely. The clone includes all the project’s files, history, and branches.
- `git add` stages a change. Git tracks changes to a developer’s codebase, but it’s necessary to stage and take a snapshot of the changes to include them in the project’s history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project’s history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.
- `git commit` saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that’s been staged with git add will become a part of the snapshot with git commit.
- `git status` shows the status of changes as untracked, modified, or staged.
- `git branch` shows the branches being worked on locally.
- `git merge` merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the master branch for deployment.
- `git pull` updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.
- `git push` updates the remote repository with any commits made locally to a branch.

#### branching

Once you set up a repository and ready to do some major work, it might be a good idea to `branch`. `branch` is a way of diverging your current state of the repository into another, named space. Let's try it - in your github repository terminal, type the git command below.

```
git branch my-first-branch
```

Confirm you created your branch by typing in

```
git branch
```

you should see the current branches in your repository, likely `master` and `my-first-branch`. Press `q` to leave the screen.

After, try switching to the branch using the command `checkout`.

```
git checkout my-first-branch
```

You are now in your very first branch! As a shortcut for the steps above, you can just type in `git checkout -b <your_new_branch_name>` which creates and automatically checks out the branch.

Within this branch, further edits and commits to your repository state will only effect this branch. When you switch back to `master`, the repository state will go back to exactly how it was when you first created the branch (of course, unless someone updated `master` while you were working on the branch).

#### adding and committing

Let's make a simple change to this repository to commit. Create a directory named `js` on your directory. You can do this using the File Explorer or just directly in the terminal using `mkdir js`.

After, create another simple file - let's try making a markdown file. Using a text editor of any kind, create a file named `hello_world.md` **in the new directory you created**. You can write anything you want in this document, it's just for practice purposes.

Now, we've changed the state of our repository. Let's check out what git thinks we've done using the command

`git status`

Your terminal should display that we've created a new directory and added a file. Now, in the terminal at the directory that holds our repo, let's stage this change for a commit.

`git add js`

When you type this command above, it will stage the new `js` directory, and all its new files, for commit. If we named the directory `my_new_fancy_dir`, we would type in `git add my_new_fancy_dir`. You could also type in `git add .` to add every change in the current directory.

Now, let's commit the change we've staged. Type

`git commit -m 'added a new js directory and markdown file'`

the `-m '<your commit message>'` part attaches a message to your commit. This is important! Imagine that other developers, and importantly YOURSELF, will want to read this commit message and know exactly what kind of changes were done here. Nice commit messages are descriptive of the changes and, ideally, searchable later using the website as project tends to have hundreds, or thousands, of commits.

Now that we've committed this change, let's try something. type `git checkout master`.

You'll notice that your `js` directory you've created is now gone! This is expected - you simply switched to the state of `master`, which does not have any idea about this change. Switch back to the other branch using `git checkout my-first-branch`.

#### pushing, pulling, pull requests

So how do we synchronise the branches together? First, let's push the changes (commits) you've made upstream (programming word for your online repository state) using the command

`git push origin my-first-branch`

You may be wondering what `origin` is here. `origin` refers to the specific github repository url you've set as your origin. This was setup when you first created the repo.

We've now pushed our change upstream, so we're ready to make our first `pull request`! Pull request is a request for a specific branch in the repo to pull your changes. We will be aiming to merge our changes into `master`.

When you go to your github repository online, you will notice some new things. Here's a picture:

![pr](https://cloud.githubusercontent.com/assets/5241432/9189475/da30eb86-3fb6-11e5-934f-ca596a2cac69.png)

The green button that says `Compare & Pull Request` is the one you want to click. When you click, the UI will be set up for you to Open a pull request. Here, set an appropriate title and write a comment on this pull request and submit it. Once it's submitted, you should be able to browse the commits you've made, as well as the Files changed.

If all looks fine, click Merge pull request. We've done it! Our first pull request has been merged. I recommend you Delete branch here as well, as too many branches can be messy - cleaning up your mess as you go is usually the best way to keep things neat.

Now your online `master` branch should have the newly created `js` directory. On your terminal, type in

`git checkout master`

What happened here? There's no `js` directory. This is because your local changes do not auto-sync with your upstream! That wouldn't be a good thing - who knows what important things you're working on locally? You wouldn't want your state to change constantly as you work on a project. Thus, you must trigger a merge manually. Type in the following command:

`git pull origin master`

This is saying to pull the state from `origin`'s branch called `master` into your current branch. If you were in another branch (such as your other branch you created) it would pull the `master` branch upstream into that branch.

If you see a screen pop up with changes (happens when there was new code your local git was not aware of) and want to leave the screen after review, type in `wq` and press Enter. That stands for `write` and `quit` together.

You should see the new `js` directory pop up with your markdown file - congratulations, you've successfully gone through the process of pull request and merging!

### NPM

NPM stands for **Node Package Manager**, a tool where the developer can download packages created by other devs using the `node` command tool. Using open-source projects like this is cornerstone of the current development landscape. With one command line, you are able to download any fleshed out project into your repo.

Before starting out, make sure you have `node` installed. Type in `npm --version` in your command line to ensure you have a working version. If that command failed, [download Node here before continuing.](https://nodejs.org/en/download/)

#### npm init

every single npm project has a file named `package.json` that keeps track of metadata of your project. Let's try creating one - first, create and navigate to a new directory with the name of your choice. For the sake of this documentation, U will call my project 'SimpleReactApp'. So we create a directory called `SimpleReactApp` and nagivate to it.

Once in the directory, initialize by typing in `npm init` the command prompt. It'll prompt you for some data, while offering the suggested in a parenthesis. Name/version it whatever you want or just keep pressing `Enter` til you have a file named `package.json` at the directory. hint - if you wanna not press enter a bunch next time, just type in `npm init --yes` and it'll just use all-default values.

When you inspect the `package.json`, you will find it is a json file with the data you just typed (or didn't) in the command line.

Of course, the details of package.json is important - but it's not something we need to worry about now!

#### npm install

The juicy part of `npm` is the ability to install any package. We're going to start off with one of my favorites, a quick-and-easy local server setter upper called [http-server](https://github.com/http-party/http-server#readme).

To install, simply type in `npm install http-server`. You should see stuff on your terminal, then successfully install your first package!

Where did it get installed? In the local folder called `node_modules`. Under that folder is where packages downloaded via `npm` gets organized. It's going to become quickly massive, as one library almost always has many dependencies.

You will also see that `package.json` now has a new `dependencies` key/value field with `http-server`. `package.json` is a growing meta-data document that describes the dependencies and scripts of your project.

Let's try using `http-server` to see it in action. This package changes ur local directory to a web server, which serves any local file up to browsers that point at it.

Create a new file called `index.html` and type in the phrase `Hello, world!` in plaintext in your file. After, type in

`http-server .`

in the terminal. It should tell you which local address the server is spinning at, something like 'http://127.0.0.1:8080'. Navigate to this address one your browser - and there it is, your first open source package used to serve a file.

