# Copykana

## Your Kana Emoji Repository

Copykana is a simple and user-friendly website that allows you to easily copy and share kana emojis. With Copykana, you can explore a wide range of kana emojis, organized into various categories like happy, love, cry, angry, and many more.  
Copykana is responsive, supports both dark and light mode, and works seamlessly in slow network conditions.

## Features

- **Copy Kana Emojis:** Quickly copy kana emojis to your clipboard with a single tap.
- **Emoji Categories:** Easily browse emojis sorted into many categories for easy access.
- **Category Filtering:** Looking for a emoji exactly for your mood? Use the category filter to find the perfect emoji. You can even filter by multiple categories at once.
- **Favourites:** You found your perfect favourite emoji? Perfect, with the new favourites features you can now save it to find it even faster!
- **Blazing Fast:** Copykana achieves blazing fast load times. In Lighthouse, Copykana scores a perfect 100 in performance!
- **Dark Mode:** Copykana supports both light and dark mode, so you can use it comfortably in any lighting condition.
- **Gorgeous Collection:** Copykana has over 30 kana emojis, and the collection is growing! Feel free to submit your own kana emojis to be featured in Copykana.

## Getting Started

To get started with Copykana, simply visit the website at [copykana.vercel.app](https://copykana.vercel.app). You can also install Copykana as a PWA on your device for easy access.

## Usage

1. Visit [copykana.vercel.app](https://copykana.vercel.app) on your device.
2. Browse the kana emojis and find the one you want to copy.
3. Tap on the kana emoji you want to use.
4. Tap on the copy button to copy the kana emoji to your clipboard. Or tap on the share button to share the kana emoji directly with your friends.

## Feedback and Contributions

If you have any feedback or suggestions, feel free to open an issue or submit a pull request. You can also submit your own kana emojis to be featured in Copykana.

## API

Not only does Copykana has a great UI, it also has a REST-API to access it's data. You can send `GET` requests to the following endpoints to get the data you need.

| Endpoint                                            | Description                                                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`/api`](https://copykana.vercel.app/api)           | Returns all kana emojis including their associated tags, using the query param tags you can filter for specific tags |
| [`/api/tags`](https://copykana.vercel.app/api/tags) | Returns a list of all tags                                                                                           |

## License

Copykana is licensed under the [GPL-3.0 License](/LICENSE).

Enjoy using kana emojis with Copykana!
