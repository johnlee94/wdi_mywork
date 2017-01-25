Basic Terminal and Navigating the File System

GUI = Graphic User Interface
CLI = Command Line Interface

shell = type of command line program (simple text base -> appropriate function)

ctrl + alt + T = open terminal	

absoulute vs relative path


Basic Bash Commands:

**cd**
**cd ~/a**
**cd ..**
**ls**
**ls ..**
**touch**
**mkdir**
**rm, rm -r**
**cp my-project, my-project-copy; cp -r my-project my-project-copy/copy-within-a-copy**
**mv this-file.txt this-folder**
**ls -a; ls -l; history; df -h(displays free diskspace)**

Permission(owner, owner group, other)
rwx-rwx-rwx = permission to read, write, execute (ower>owner group> other) [r=4, w=2, 1] (7=r+w+x, or permission to do all 3)

**chmod** = modify a files permission
chmod options mode file(s) (options in< >)
i.e. chmod 755 a_file.txt

**echo** $PATH (show path)

.bashrc; atom ~/.bsahrc . ;;;;;;; .bash_profile; atom .bashprofile;