import facebookIcon from 'images/icon-facebook.svg'
import youtubeIcon from 'images/icon-youtube.svg'
import instagramIcon from 'images/icon-instagram.svg'
import twitterIcon from 'images/icon-twitter.svg'

export const followers = [
  { id: 1, platform: 'facebook', followers: 1987, change: 12, user: '@nathanf' },
  { id: 2, platform: 'twitter', followers: 1044, change: 99, user: '@nathanf' },
  { id: 3, platform: 'instagram', followers: 11000, change: 1099, user: '@realnathanf' },
  { id: 4, platform: 'youtube', followers: 8239, change: -144, user: 'Nathan F.' },
]

export const overviews = [
  { id: 1, subject: 'Page Views', platform: 'facebook', value: 87, change: '3%' },
  { id: 2, subject: 'Likes', platform: 'facebook', value: 52, change: '-2%' },
  { id: 3, subject: 'Likes', platform: 'instagram', value: 5462, change: '2257%' },
  { id: 4, subject: 'Profile Views', platform: 'instagram', value: 52000, change: '1375%' },
  { id: 5, subject: 'Retweets', platform: 'twitter', value: 117, change: '303%' },
  { id: 6, subject: 'Likes', platform: 'twitter', value: 507, change: '553%' },
  { id: 7, subject: 'Likes', platform: 'youtube', value: 107, change: '-19%' },
  { id: 8, subject: 'Total Views', platform: 'youtube', value: 1407, change: '-12%' },
]

export const socialIconEnum = Object.freeze({
  facebook: { value: 'facebook', image: facebookIcon },
  youtube: { value: 'youtube', image: youtubeIcon },
  twitter: { value: 'twitter', image: twitterIcon },
  instagram: { value: 'instagram', image: instagramIcon },
})
