import urllib.request

endpoints = [
    '/',
    '/favicon.svg',
    '/robots.txt',
    '/sitemap.xml',
    '/assets/images/siddhi_hirpara.jpg',
    '/assets/resume/Siddhi_Hirpara_Resume.pdf',
    '/assets/certificates/The_Linux_Foundation.jpeg',
    '/assets/certificates/AWS_Cloud_Practitioner_Essential.jpeg',
    '/assets/certificates/Cybersecurity_Analyst_Job_Simulation.jpeg',
    '/assets/certificates/Launch_an_auto-scaling_AWS_EC2_virtual_machine.jpeg',
    '/assets/certificates/Sprring_Boot.jpeg',
    '/assets/projects/student_internhub.png',
    '/assets/projects/hero_internhub.png',
    '/assets/projects/hero_cicd.png'
]

base = 'http://localhost:5173'
all_ok = True

for ep in endpoints:
    url = base + ep
    try:
        req = urllib.request.Request(url, method='HEAD')
        with urllib.request.urlopen(req) as resp:
            print(f'[OK 200] {ep} ({resp.headers.get("Content-Length", "unknown")} bytes)')
    except Exception as e:
        print(f'[FAIL] {ep} -> {e}')
        all_ok = False

if all_ok:
    print('\nALL ENDPOINTS AND ASSETS VERIFIED 100% OK!')
else:
    print('\nSOME ENDPOINTS FAILED!')
