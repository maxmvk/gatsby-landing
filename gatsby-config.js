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
        link: `/`,
        imageUrl: `/background-1-2.png`,
        sidebarUrl: `/background-1-1.png`
      },
      {
        name: `About`,
        link: `/about/`,
        imageUrl: `/background-2-2.png`,
        sidebarUrl: `/background-2-1.png`
      },
      {
        name: `Tutorial`,
        link: `/tutorial/`,
        imageUrl: `/background-3-2.png`,
        sidebarUrl: `/background-3-1.png`
      },
      {
        name: `FAQ`,
        link: `/faq/`,
        imageUrl: `/background-4-2.png`,
        sidebarUrl: `/background-4-1.png`
      },
      {
        name: `Feedback`,
        link: `/feedback/`,
        imageUrl: `/background-5-2.png`,
        sidebarUrl: `/background-5-1.png`
      },
      {
        name: `Contacts`,
        link: `/contacts/`,
        imageUrl: `/background-6-2.png`,
        sidebarUrl: `/background-6-1.png`
      },
      {
        name: `Become Beta User`,
        link: `/beta/`,
        imageUrl: `/background-7-2.png`,
        sidebarUrl: `/background-7-1.png`
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
