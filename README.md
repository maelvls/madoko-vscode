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

# Change Log

## 0.0.2
- fixed coloring of bib citations. Example: `[@ref; @ref, p. 32]`.
  Note that 'p. 32' is not colored yet.
- fixed coloring of entities (the madoko variables) containing
  `-` or `_`. Example: `&my-variable;`

## 0.0.1
- Initial release.