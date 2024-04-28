<h3 align="center">
CSSharp Panel - Admin Web Panel for CounterStrikeSharp
</h3>

CSSharp Panel is a web panel for CounterStrikeSharp that includes many features such as servers management, admins management, ban & comms management, rcon functions and much more, with a modern UI and a lot of customization options.

[Join our Discord](https://discord.gg/r96PSHfNcW) - [View the docs](https://csspanel.dev/) - [Demo website](https://css.next-il.co.il/)

## Important Note

Running the panel made easier, you can now install the panel locally in a few more ways, and you dont have to build the panel, just install and run it! :)
Follow the [docs](https://csspanel.dev/docs/quickstart) for more information.

## Features

-   🚀 **Fast**: Built with Next.js on top of React, with a fully typed Front-end & back-end.
-   🛡 **Bulletproof**: Written in strict TypeScript and has 100% test coverage.
-   😍 **Simple**: Straightforward and easy to use, connects to your cssharp db and servers with no effort or knowledge.
-   📖 **Documentation**: Includes detailed documentation for all the features and function.
-   📦 **Highly Customizable**: Includes many options for customization to achive the most out of the panel and make it unique to your community, includes support for custom themes and colors with a single click in the admin panel, and even code editors for some of the website parts for 100% customization!

## Getting Started

Detailed installation instructions can be found in the [docs](https://csspanel.dev/docs/quickstart).

## Features Roadmap & Progress

-   [x] Servers - take the servers data from the database and display it in the panel.
    -   [x] Servers status as table / cards
        -   [ ] Table view (fix)
    -   [x] Modal - Show each server players in the panel, and also their admin status and flags.
        -   [x] ability to kick, ban, mute, gag, etc as a context menu
        -   [x] rcon command with response (@root)
        -   [x] chat window with the ability to send messages to the server and see the server chat (using the chatlogger plugin?) and show the map background, also add context menu for the chat messages players.
-   [x] Bans - take the bans data from the database and display it in the panel.
    -   [x] Bans status as table
-   [x] Comms - take the comms data from the database and display it in the panel.=
    -   [x] Comms status as table
-   [x] Admin Panel - manage the whole panel settings, admins, servers, comms and bans.
    -   [x] Statistics - show statistics about the panel, such as the amount of admins, servers, comms, bans, etc.
        -   [x] Plugin: find out a way of count the server entries by the server_id and show it in the statistics.
            -   [ ] Plugin: for each server give a button that shows a list of all connected players from 2 hours ago.
    -   [x] Logs
    -   [x] Manage Admins
        -   [x] Add, edit, delete admins with the ability to change their permissions.
    -   [x] Roles / Groups system - make it possible to create roles / groups with pre assigned permissions and assign admins to them.
    -   [x] Manage Servers - Add, edit, delete servers from the db.
    -   [x] Manage Comms
        -   [x] Show comms information in the panel.
        -   [x] Edit, delete comms from the db.
        -   [x] Add comms from the panel
        -   [x] Add comms from the servers modal
    -   [x] Manage Bans
        -   [x] Show bans information in the panel.
        -   [x] Edit, delete bans from the db.
        -   [x] Add bans from the panel
        -   [x] Add bans from the servers modal
    -   [x] Manage Settings
        -   [x] General settings - change the panel name, logo, etc.
        -   [x] SEO settings - change the panel SEO settings such as title, description, etc.
        -   [x] Design settings - change the panel design, colors, etc.
        -   [x] Discord settings - add discord webhook for bans, comms, etc. from the panel.
        -   [x] Advanced settings - debug mode, early access, etc.
        -   [x] Customization settings - add custom css, js, etc.
		-	[x] Custom Pages - add the ability to create custom pages from the admin panel.
		-	[x] Custom Menus - add the ability to create custom menus from the admin panel.
-   [ ] Language support - add the ability to change the panel language from the admin panel, make it possible to create custom languages and add them to the panel through the repo.
-   [x] Change the way of running the panel to be easier for non developers, and make the panel ready for production use.

## Links

-   [Join the Discord](https://discord.gg/eAZU3guKWU): Ask questions, provide suggestions
-   [Example Panel](https://css.next-il.co.il/): view a demo panel
-   [Docs](https://csspanel.dev/): Installation instructions
-   [Issues](https://github.com/CSSPanel/Panel/issues): Raise any issues here
