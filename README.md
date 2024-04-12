# The Lazy Template

The "lazy template" is, as the name implies, a lazy template at it's core. It's goal is to be a comprehensive starter template for building Next.js applications quickly. It is a fully type-safe, very simple and incredibly easy to customize template. I built this as a starter template that just works so as to reduce the repetitive tasks of setting up the repository. There is still a lot of improvements to be done.

## Key Features

1. <strong>Next.js</strong>: My, and about a million other developers favorite React Framework.
2. <strong>Ant Design</strong>: Ant Design solely for it's rich collection of UI components.
3. <strong>DaisyUI</strong>: DaisyUI is a feature-rich TailwindCSS plugin. Yes, you get to use TailwindCSS too. It has a nice set of semantic utility classes which enhances.
4. <strong>Clerk</strong>: for seamless authentication, allowing users to sign up, log in, and manage their accounts effortlessly. Basically uses a webhook to add users to  the database.
5. <strong>UploadThing</strong>: A very easy to use and type safe alternative.
6. <strong>Prisma</strong>: as the ORM, pretty self explanatory
7. <strong>Postgresql</strong>: The database.

## Getting Started

<code>git clone this repository</code>

<code>yarn</code>

<code>cp .env.template .env</code>

Then:

Get the necessary api keys and environment variables to update .env

<code> yarn dev</code>

<code>yarn build </code>

## Warning

The design choices are weird and have to be strictly adhered to, to prevent errors in rendering. Let components be handled by Ant Design and layout be handled by DaisyUI, or if you may, TailwindCSS.

### Contributing

Contributions to the "lazy template" are welcome! Feel free to submit pull requests, report issues, or suggest improvements to make this template even better for the Next.js community.

License:
This project is licensed under the MIT License - see the LICENSE file for details.
