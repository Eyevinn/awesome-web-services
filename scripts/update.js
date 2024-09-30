#!/usr/bin/env -S node

function generateReadmeHeader() {
  return `# Awesome Web Services

A list of awesome open source that has been made available as a service 
through [Open Source Cloud](https://app.osaas.io).

## What is Open Source Cloud?

We developed Open Source Cloud to reduce the barrier for users to get started
with open source by reducing the barrier for an open source creator to offer 
their software as a service.

--------------------

  `
}

function generateToc(sortedList) {
  let toc = `## Table of Contents

`;
  sortedList.forEach((item) => {
    toc += ` - [${item.title}](#${item.serviceId})\n`;
  });
  toc += `\n`;
  return toc;
}

function generateServiceList(sortedList) {
  let list = `## Open Source as a Service

`;
  sortedList.forEach((item) => {
    list += ` - [${item.title}](https://app.osaas.io/dashboard/service/${item.serviceId}) [`;
    list += `[SRC](${item.repoUrl})`;
    if (item.documentationUrl) {
      list += `|[DOCS](${item.documentationUrl})`;
    }
    list += `] - ${item.description}\n`;
  });
  list += `\n`;
  return list;
}

function generateFooter() {
  return `# Join the Conversation

There are a couple of ways for you to provide feedback or ask the community for help.

 - Slack: Join the channel #opensourcecloud in the [Streaming Tech Sweden slack](http://slack.streamingtech.se).
 - Forum: [GitHub Discussions](https://github.com/Eyevinn/osaas/discussions)
`;
}

async function main(args) {
  const res = await fetch('https://catalog.svc.prod.osaas.io/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: '*'
    })
  });
  if (res.ok) {
    const json = await res.json();
    const sortedList = json.sort((a, b) => a.title.localeCompare(b.title));
    const readme = generateReadmeHeader() + generateToc(sortedList) + generateServiceList(sortedList) + generateFooter();
    return readme;
  } else {
    throw new Error(res.statusText);
  }
}

main(process.env.args).then((readme) => { console.log(readme) }).catch((e) => { console.error(e) });