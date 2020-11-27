/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    menuLinks: [
      {
        name: `Home`,
        link: `/`
      },
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Tutorial`,
        link: `/tutorial`
      },
      {
        name: `FAQ`,
        link: `/faq`
      },
      {
        name: `Feedback`,
        link: `/feedback`
      },
      {
        name: `Contacts`,
        link: `/contacts`
      },
      {
        name: `Become Beta User`,
        link: `/beta`
      }
    ],
    faqs: [
      {
        question: `I don’t have my wine inventoried, but can I still ask to trade with another cellar owner?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `How do I get my inventory entered in CELLR if I already have it entered on another site?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Can I use CELLR in conjunction with other inventory sites?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Can I just send you an export of my cellar inventory and you assist with the import?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Will I be able to sync my CELLR inventory with any other platforms?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `I don’t have my wine inventoried, but can I still ask to trade with another cellar owner?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `How do I get my inventory entered in CELLR if I already have it entered on another site?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Can I use CELLR in conjunction with other inventory sites?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Can I just send you an export of my cellar inventory and you assist with the import?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
      {
        question: `Will I be able to sync my CELLR inventory with any other platforms?`,
        answer: `We’ve tried to make this as easy a process as possible. You have the option of syncing your 
        Cellar Tracker inventory or you can simply export your inventory from whatever platform you are 
        currently using and our team is happy to assist with your import.`
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    // add style plugins below
    `gatsby-plugin-typography`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`
  ],
}
