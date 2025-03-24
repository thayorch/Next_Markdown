---
title: w01-Lab1
tag: lab
---

# Command Line for Beginners

### Console

- Physical Device that allows you to interact with the computer.
- use Screen, Keybord, Mouse, etc.

### Terminal

- A terminal is a text input/output enviroment.
- The "window" in which you enter the actual commands your computer will process.

### Shell / Bash

#### &nbsp; &nbsp; Shell is Command Line Inerpreter

- Responsible for receiving commands from the keyboard and sending them to the OS for further action.
- It is a type of Command Line interface (CLI).

#### &nbsp; &nbsp; Bash (Bourne Again Shell)

- It is a program like a shell.
- It just an interface for you to execute statements

### Command Line Interface (CLI)

#### &nbsp; &nbsp; Practically the same as the terminal

### Graphical User Interface (GUI)

#### &nbsp; &nbsp; The characteristics of computer programs that use symbols can interact with users through the use of various icons and images

### Directories

- Directory = Folder
- Directory's name = cas-sensitive
- Downloads != downloads

### I/O Redirection

- `(<)`  Standard Input (stdin) ` command < file `
- `(>)`Standard Output (stdout) ` command > file `
- `(>>)` Out from command to bottom line (append) ` command >> file `
- `(< >)` Input from < infile > Output to < outfile > `command < infile > outfile`
- `(|)` Output of 1 == Input of 2 (piping) ` command1 | command2 `

  - result same this

    ```bash
    command1 > tempfile
    command2 < tempfile
    rm tempfile
    ```

- `(2>&1)`Standard Error (stderr)
  - redirac error stream by number

    ```bash
    $ ls hello.txt > out.txt 2> err.txt
    $ cat out.txt
    $ cat err.txt
    ls: cannot access hello.txt: No such file or directory
    ```

    or

    ```bash
    ls hello.txt 2>&1 | less
    ```

# Most common and Useful commands

### echo

- ` echo [OPTION] `
- Print parameters
  - Print Text

    ```bash
    $ echo Hello World
    HelloWorld
    ```

  - Print variable

    ```bash
    $ x=10
    $ echo "x = "$x
    x = 10
    ```

  - Print System variable

    ```bash
    $ echo $PATH
    /opt/local/bin:/opt/local/sbin
    ```

- Command Parameter
  - `-n` Doesn't add `\n` after end word.

    ```bash
    $ echo -n HelloWorld
    HelloWorld$
    ```

  - `-e` Enable variable / special characters

    ```bash
    $ echo -e "Hello\nWorld"
    Hello
    World
    ```

- Show file list (same `ls`)

    ```bash
    $ ls
    Desktop/  Documents/  Downloads/
    ```

    ```bash
    $ echo *
    Desktop  Documents  Downloads
    ```

### pwd

- pwd - print name of current/working directory.
- `pwd [OPTION]`

### ls

- `List` directory contents.
- `List` File and Sub Directory in Current Directory.
- `List` hidden file.

    ```bash
    $ ls -a
    .  ..  .bash_profile  .bashrc  .inputrc  .profile 
    ```

  - `-a` : option call all file in directory.
  - `-f` : non sort file.
  - `-l` : show file detail.
  - `-h` : shared option with `-l` for show file size.
  - `-t` : sort by date / lastest time.

### cd

- cd - change current director
- `cd <directoryname>`

```bash
$ ls -a
.  ..  /test
$ cd test
```

### mkdir

- mkdir - make new directory
- `mkdir [OPTION] <directoryname>`

    ```bash
    $ ls
    Desktop/ Documents/ Downloads/
    $ mkdir Test
    $ ls
    Desktop/ Documents/ Downloads/ Test/
    ```

### touch

- touch - create empty file
- `touch <filename>`

    ```bash
    $ ls -a
    .  ..
    $ touch test.txt
    $ ls -a
    .  ..  test.txt
    ```

- `touch [OPTION]  <filename>`
  - time = current time

    ```bash
    touch -c out
    ```

  - time = 10 Feb 2015 4:00 PM.

    ```bash
    touch -t 201502101600.00 out
    ```

### rm

- rm - remove file and directories
- `rm [OPTION] <file>`

    ```bash
    rm test.txt
    rm -r Test
    ```

### mv

- mv - move/rename files and directories
  - `mv [OPTION] <source> <destination>` (move)

    ```bash
    mv test.txt Test
    ```

  - `mv [OPTION] <source> <destination>` (rename)

    ```bash
    mv test.txt text.txt
    ```

### cp

- cp - copy files and directories
- `cp [OPTION] <source> <destination>`
  - copy file same directory

    ```bash
    cp test.txt test1.txt
    ```

  - copy file different directory

    ```bash
    cp test.txt Test
    ```

    - copy directory with file in directory

    ```bash
    cp -r dir dir1
    ```

### head

- head - view the beginning of a file (10 lines).
- `head [OPTION] <file>`

    ```bash
    $ cat test.txt
    1
    2
    3
    ...
    10
    11

    $ head test.txt
    1
    2
    3
    ...
    10
    ```

### tail

- tail - view the end of a file (10 lines).
- `tail [OPTION] <file>`

    ```bash
    $ cat test.txt
    1
    2
    3
    ...
    10
    11

    $ tail test.txt
    2
    3
    4
    ..
    11
    ```

### less

- less - browse file content
- `less [OPTION] <file>`

### man

- man - view command info
- man [command]

### grep

- grep - find files w/ matching content
- `grep [OPTIONS] PATTERN <file>`
  - find by pattern.

    ```bash
    $ cat hello.txt
    Hello, World!!
    $ grep "Hello" hello.txt
    Hello, World!!
    ```

  - find and show line of pattern.

    ```bash
    $ cat hello.txt
    Hello, World!
    Hello, World!!
    $ grep -n "Hello" hello.txt
    1:Hello, World!
    2:Hello, World!!
    ```

  - find by case-insensitive.

    ```bash
    $ cat hello.txt
    Hello, World!
    $ grep -i "Hello" hello.txt
    1:Hello, World!
    ```

### history

- history - view command history
    ```bash
    $ history
    1  echo HelloWorld
    2  x=10
    3  echo "x =" $x
    4  echo $PATH
    ```
#