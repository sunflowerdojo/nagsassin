# NagSassin

Browser plugin that attempts to remove email signup modals, and other harassment.
Targets: Firefox (in progress), Chrome (not started)

## What are nags?

I go to some website to do my thing. Suddenly:

"Enter your email to get subscribed to the list"

"HEY BEFORE YOU GO ..."

"We've seen you before. Let's make this official."

"20% OFF ALL ITEMS SATURDAY"

"Log in to view more"

Just leave me alone!

## Design

Right now it works by searching for certain document elements on specific websites, and removing them on page load.

Some sites are designed to have the nagging modals hidden, and then displayed at some point.

Some sites create document elements (modals) some time after the page has been created.

TO-DO:

- browse the web and identify known nags, expanding the list of sites served

- be able to target nags that are created some time after the page is finished loading

## Current Status

The project can be loaded as a "temporary plugin" for Firefox.
