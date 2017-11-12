# Madoko for VSCode

This extension brings syntax coloring support for the [Madoko] language
([Github]) designed by Daan Leijen as a showcase for his new [Koka] language.

Madoko is a nice markdown dialect as well as a great editor "à la Sharelatex".

[Madoko]: https://www.madoko.net
[Github]: https://github.com/koka-lang/madoko
[Koka]: https://github.com/koka-lang/koka

This extension is basically a copy-paste of the `.tmLanguage` files that
are available in the madoko repository. The file extensions are `.mdk` and
`.madoko`.

# Tips

If you want to "rewrap to 80 characters" manually (`⌥Q` in madoko.net), you
can install the extension **Rewrap** and map the `rewrap.rewrapComment`
command to `⌥Q`:
```json
{
  "command": "rewrap.rewrapComment",
  "key": "alt+q",
  "when": "editorTextFocus"
}
```
For table re-wrapping and auto-arranging, I use **Table Formatter** and map
the table re-wrapping to `⇧⌥Q`:
```json
{
  "command": "extension.table.formatCurrent",
  "key": "shift+alt+q",
  "when": "editorTextFocus"
}
```

# If you want to improve the grammar

- clone the project into your ~/.vscode/extensions folder:

      git clone git@github.com:maelvalais/madoko-vscode.git ~/.vscode/extensions/madoko-vscode

- open it in vscode

      code ~/.vscode/extensions/madoko-vscode

- from this folder, install the dev dependencies:

      npm install

- then you can launch the automatic compilation of `madoko.JSON-tmLanguage`:

      npm start

When you make changes to `madoko.JSON-tmLanguage`, `madoko.tmLanguage` will
be produced automatically. Now, you can start hacking `madoko.JSON-tmLanguage`.
In order to see the changes in your `.mdk`, you must reload vscode with
⇧⌘P + `Reload Windows`.

I also recommend to run ⇧⌘P + `Inspect TM scopes` in order to inspect in your
`.mdk` in what scope each character is. This will help you finding where
the faulty rule is in `madoko.JSON-tmLanguage`.

For example, take this wrong highlighting on `* __BOLD__`; I first open
`Inspect TM scopes` to inspect the tmLanguage scopes:

![Wrong highlighting of *__BOLD__ in a mdk file](https://user-images.githubusercontent.com/2195781/32697892-22ecdf10-c79b-11e7-9fbf-c4d5f90a8675.png)

Then, I search inside the `madoko.JSON-tmLanguage` and look for the scope
`keyword` and `markup.heading.madoko`:

![The faulty tmgramamr rule in madoko.JSON-tmLanguage](https://user-images.githubusercontent.com/2195781/32697893-23b483a8-c79b-11e7-9aed-7659c8dd7fb4.png)

Note that usually, tmLanguage scopes are specific to each rule so that we
can find the faulty rule easily. But here, the tmLanguage file (I did not
write it) has been written _à la CSS_ and the scopes are not really helping...

# Change Log

## 0.0.3
- turn word wrap on by default for the Madoko language, similarly
  to Markdown (contributed by kvn-s)

## 0.0.2
- fixed coloring of bib citations. Example: `[@ref; @ref, p. 32]`.
  Note that 'p. 32' is not colored yet.
- fixed coloring of entities (the madoko variables) containing
  `-` or `_`. Example: `&my-variable;`

## 0.0.1
- Initial release.