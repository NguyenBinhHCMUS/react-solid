# Separate responsibilities

Making a “God” component is a common mistake that developers make. It’s called “God” because it contains many lines of code that are hard to understand and maintain. I strongly recommend dividing components into sets of independent sub-modules.

A typical structure for this would be:

- UI module, responsible for visual representation only.
- Logic/Model module, containing only business logic. An example of this is a custom hook.
- Lib module, containing all required utilities for the component.

Here’s a small demo example to help illustrate this concept.
