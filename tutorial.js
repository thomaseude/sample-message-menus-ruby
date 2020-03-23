const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date

(async () => {

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: '#general',
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Hi <fakelink.toUser.com|@David>!* Here's how I can help you:"
          }
        },
        {
          "type": "divider"
        },

        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Pick a ticket list from the dropdown"
          },
          "accessory": {
            "type": "static_select",
            "placeholder": {
              "type": "plain_text",
              "text": "Select an item",
              "emoji": true
            },
            "options": [
              {
                "text": {
                  "type": "plain_text",
                  "text": "All Tickets",
                  "emoji": true
                },
                "value": "all_tickets"
              },
              {
                "text": {
                  "type": "plain_text",
                  "text": "Assigned To Me",
                  "emoji": true
                },
                "value": "assigned_to_me"
              },
              {
                "text": {
                  "type": "plain_text",
                  "text": "Issued By Me",
                  "emoji": true
                },
                "value": "issued_by_me"
              }
            ],
            "initial_option": {
              "text": {
                "type": "plain_text",
                "text": "Assigned To Me",
                "emoji": true
              },
              "value": "assigned_to_me"
            }
          }
        },
        {
          "type": "divider"
        },

        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":calendar: *Create event* \n Create a new event"
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Create event",
              "emoji": true
            },
            "style": "primary",
            "value": "click_me_123"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Send feedback",
                "emoji": true
              },
              "value": "click_me_123"
            },
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "FAQs",
                "emoji": true
              },
              "value": "click_me_123"
            }
          ]
        }
      ]

    });
  } catch (error) {
    console.log(error);
  }

  console.log('Message posted!');
})();


