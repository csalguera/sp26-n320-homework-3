# SnapGrid Social Dashboard (Homework 3)

A front-end JavaScript assignment project that builds interactive social media UI behavior using DOM manipulation and event handling.

## Overview

This project implements five core interaction tasks in a social dashboard interface:

1. Dark/Light theme toggle
2. Follow/Unfollow button with live follower count updates
3. Live post composer with character count and post creation
4. Like/Unlike behavior with total liked-post tracking
5. Hashtag-based post filtering

## Features

- Theme toggle between dark and light modes
- Follow state toggle with button style/text changes
- Real-time character counter for post composition (280 max)
- Post button enable/disable based on non-empty input
- Dynamic post creation at the top of the feed
- Hashtag extraction from new post text (for example: #design)
- Tag metadata stored in each new post via `data-tags`
- Like button behavior for both initial and newly created posts
- Sidebar filter pills to show posts by hashtag
- Filter status message with visible post count

## Project Structure

```text
homework-3/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── solutions.js
```

## How to Run

This is a static front-end project.

1. Open `index.html` directly in your browser
2. Or use VS Code Live Server if installed

## Implementation Notes

- Primary logic is in `js/solutions.js`
- The composer parses hashtags with a regex and normalizes them to lowercase
- The filter supports posts with tags separated by spaces or commas
- No external JavaScript libraries are required

## Assignment Context

Course: N320

Focus areas:

- DOM selection and updates
- Event listeners
- Dynamic element creation
- Class toggling and state management
- Simple content filtering logic
