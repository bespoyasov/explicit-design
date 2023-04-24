# Explicit Software Design

Source code and examples for the “Explicit Design” post series in my blog.

In this 11-part (so far) series, we're be building a fictional currency converter application. Each post focuses on one specific topic:

- [ ] Introduction: principles and constraints
- [ ] Modeling the domain
- [ ] Designing use cases and application core
- [ ] Describing the UI as an “adapter” to the application
- [ ] Creating infrastructure to support use cases
- [ ] Composing the application using hooks
- [ ] Composing the application without hooks
- [ ] Dealing with cross-cutting concerns
- [ ] Extending functionality with a new feature
- [ ] Decoupling features using events
- [ ] Overview and preliminary conclusions

## Repo Structure

We're building the application step by step. Each post refers to a separate folder in the project repository, where you can see how everything is organized and play with the code.

## Future Plans

In addition, I have an idea to extend the series with a few related posts on similar topics:

- Applicability of everything described with frameworks (e.g., Next.js)
- Improving type safety with type branding (e.g., for more vivid DDD)
- Code splitting, routing, and performance (e.g., using `Suspense` and `use`)
- Functional error handling (e.g., with `Result<TOk, TErr>`)
- Applicability with other UI libraries (e.g., Solid or Svelte)

If you want to see another particular topic in the list, feel free to ping me in [issues](https://github.com/bespoyasov/explicit-design/issues)! 👋

## Disclaimers

> This is not a recommendation on how to write or not write code.

I am not aiming to “show the correct way of coding” because everything depends on the specific project and its goals. My goal in this project is to _try_ to apply the principles from various books in a frontend application to understand where the scope of their applicability ends, how useful they are, and whether they pay off.

Take the code examples in this series not as a direct development guide, but as a _source of ideas_ that may be useful to you.

## About Author

Alex Bespoyasov, software engineer at 0+X, web developer since 2010.

- [Follow me on Twitter](https://twitter.com/bespoyasov_)
- [Subscribe to my blog](https://bespoyasov.me/blog/)
- [Buy me a coffee](https://buymeacoffee.com/bespoyasov)
