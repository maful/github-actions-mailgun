# Send email with Mailgun

Unofficial - This action gives the ability to send emails with Mailgun.

[![test](https://github.com/maful/github-actions-mailgun/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/maful/github-actions-mailgun/actions/workflows/test.yml)

> [Libur.run](https://github.com/maful/libur.run) - Empower Your HR with Next-Gen Open Source Self-Serve Platform

## Inputs

| Key | Required | Description |
|---|---|---|
| api_key | Yes | Mailgun API Key |
| domain | Yes | Mailgun Domain |
| from | Yes | Email sender |
| to | Yes | Email receiver |
| subject | No | Email subject |
| body | No | Email body |
| attachment | No | Currently, you are only able to attach a single attachment. You need to provide a full path location of the attachment. |

## Example usage

```yml
- name: Send email
  uses: maful/github-actions-mailgun@main
  with:
    api_key: ${{ secrets.API_KEY }}
    domain: ${{ secrets.DOMAIN }}
    from: ${{ secrets.FROM_EMAIL }}
    to: ${{ secrets.TO_EMAIL }}
    subject: 'Action subject'
    body: 'Action body'
    attachment: ${{ github.workspace }}/github.png
```

## 🙏 Contributing

1. Fork and clone this repository
2. Install packages `npm install`
3. Make necessary changes
4. Run `npm run pack` to build the project
5. Commit your changes and create a PR

Please make sure to run `npm run pack` before submitting pull requests. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/maful/versafleet-ruby/blob/master/CODE_OF_CONDUCT.md).

## License

The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
