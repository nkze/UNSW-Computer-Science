#!/usr/bin/python3
# written by andrewt@unsw.edu.au as a COMP(2041|9044) example

# Repeatedly download a specified web page
# until a specified regexp matches its source
# then notify the specified email address.

# implemented using urllib.request

import re
import sys
import subprocess
import time
import urllib.request

REPEAT_SECONDS = 300  # check every 5 minutes

if len(sys.argv) == 4:
    url = sys.argv[1]
    regexp = sys.argv[2]
    email_address = sys.argv[3]
else:
    print(f"Usage: {sys.argv[0]} <url> <regex> <email-address>", file=sys.stderr)
    sys.exit(1)

while True:
    response = urllib.request.urlopen(url)
    webpage = response.read().decode()
    if not re.search(regexp, webpage):
        time.sleep(REPEAT_SECONDS)
        continue

    mail_body = f"Generated by {sys.argv[0]}"
    subject = f"website '{url}' now matches regex '{regexp}'"
    # the echo is for testing, remove to really send email
    subprocess.run(["echo", "mail", "-s", subject], text=True, input=mail_body)
    sys.exit(0)
