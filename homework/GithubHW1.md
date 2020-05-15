# Github Homework

This homework assignment introduces github.

### Instructions

First, [install git on your OS.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). We will be learning command line git. Then, [create an GitHub account](https://github.com/). It's free, and you can opt to pay for private repos, but that is not necessary for our course.

After, create a directory (a folder) call `hello_world` on your machine. Create it somewhere easily accessible, maybe your `Documents` or `Desktop`. You can do this using your computer's File Explorer or from the command line using `mkdir {directory name}`.

Navigate to this directory in the command line (`cd hello_world` if your terminal is at the directory) and type the command `git init`.

In this new directory, using any text editor you like (you can use VSCode or Notepad even), create a file called `hello.txt`. After creating this file, you can type `git status` in your command line to see that your git has noticed the new file.

Type `git add hello.txt` into the command line. This is telling git to add the new file for a commit.

Type `git commit -m "This is my very first commit!"` to the command line. This `commit`s the new file to git.
`git` may prompt you to enter your login information for github and give you some directions. Follow the instructions if it prompts you and commit the changes again.

Go to [github.com](https://github.com/). On the top right, there is a `+` button that shows a menu for a `New repository`. After clicking the button, Github will prompt for name and description of the repo. Fill in the name as `hello_world` and whatever description you'd like, and click Create repository.

![repo-pic](https://product.hubspot.com/hs-fs/hubfs/Git_101_Screenshot_2-1.png?width=1342&height=836&name=Git_101_Screenshot_2-1.png)

When you create a repository, it'll have instruction for what to do if you want to '... push an existing repository from the command line'. It's the instruction prompting you to add the git remote using the commands
```
git remote add origin https://github.com/<your_account>/<your_repository_name>.git
git push origin master
```

If you followed above steps, congratulations, you've created your very first git repository with a file initialized!

### Turning it in

DM me on Discord the name of your new git repository.
