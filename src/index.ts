import * as core from '@actions/core';
import mailgun from 'mailgun-js';

function run() {
  const apiKey: string = core.getInput('api_key', { required: true });
  const domain: string = core.getInput('domain', { required: true });
  const from: string = core.getInput('from', { required: true });
  const to: string = core.getInput('to', { required: true });
  const subject: string = core.getInput('subject');
  const body: string = core.getInput('body');
  const attachment: string = core.getInput('attachment');

  const mg = mailgun({ apiKey: apiKey, domain: domain });
  const data = {
    from: from,
    to: to,
    subject: subject || 'Hello from Github Actions Mailgun',
    text: body || 'Hello from Github Actions Mailgun',
  };
  mg.messages().send(data, function(err, body) {
    if (err) {
      core.setFailed(`Failed to send an email with error: ${err}`);
    } else {
      core.setOutput('result', `Success to sent an email`);
    }
  });
}

run();
