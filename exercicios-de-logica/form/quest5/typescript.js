const mailCRM = require("@mailCRM/mailCRM_marketing");

const listId = "YOUR_LIST_ID";
const subscribingUser = {
  email: "prudence.mcvankab@example.com"
};

async function run() {
  const response = await mailCRM.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed"
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}

run();