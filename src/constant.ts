export const EXPERIENCE = [
    {
        duration: 'AUG 2019 - JAN 2020',
        companyName: 'Picktorlabs',
        role: 'Software Engineer',
        link: 'https://piktorlabs.com/',
        description: 'Worked on the Frontend team for T-Mobile adding new features and building re-usable components',
        techStack: ['Angular(2+)', 'Typescript', 'HTML/CSS']
    },
    {
        duration: 'JAN 2020 - MAY 2020',
        companyName: 'ShopX',
        role: 'Software Engineer',
        link: 'https://shopx.in/',
        description: `Worked on the in-house B2C grocery shopping application
(shopX app) during the pandemic. I was responsible for
building a map to show all the nearby Kirana stores linked
to our company. Also enhanced the app suggestion page
and the grocery-shopping experience ow, from add-to-cart
until checkout`,
        techStack: ['ReactJs', 'Typescript', 'HTML/CSS', 'Maps API', 'Redux']
    },
    {
        duration: 'MAR 2021 - SEP 2021',
        companyName: 'AccelQ',
        role: 'Software Engineer',
        link: 'https://www.accelq.com/',
        description: `Created a React
Native application for iOS and a native Android app, which
was used to demo and teach customers and students how to
use the product for testing apps.`,
        techStack: ['Angular(2+)', 'Typescript', 'HTML/CSS']
    },
    {
        duration: 'JAN 2022 - AUG 2024',
        companyName: 'Workspan',
        role: 'Software Engineer II',
        link: 'https://www.workspan.com/',
        description: `Responsible for adding new features and working on
optimization of the app. Was responsible for guiding the
juniors, doing sprint planning with the manager, working
closely with the product and UX team, and CEO to discuss
solutions, and reviewing the test plans with the QA team for
a better product delivery. Was involved in the discussions
for any Frontend features to be delivered by any team, and
reviewing the design documents and test cases.`,
        techStack: ['Angular(2+)', 'Typescript', 'HTML/CSS', 'Ag-Grid', 'AngularJS', 'CoffeeScript', 'Sendgrid']
    }
]

export const PROJECTS = [
    {
        name: 'Easy Bill',
        link: 'https://cashbill-easy.web.app/bill',
        githubLink: 'https://github.com/dipesh1903/bill',
        description: 'Generate quick bulk Gst cash Bill for your company',
        techStack: ['ReactJs', 'Typescript', 'HTML/CSS', 'Tainwindcss', 'firebase']
    },
    {
        name: 'Lifafa',
        link: 'https://chitthi-a7bcd.web.app',
        githubLink: 'https://github.com/dipesh1903/lifafa',
        description: 'One place to save all your favourite links and thoughts. Share the link with the world , or keep it private or collborate with your firends and family',
        techStack: ['ReactJs', 'Typescript', 'HTML/CSS', 'Tainwindcss', 'firebase']
    },
    {
        name: 'Bill Scanner',
        githubLink: 'https://github.com/dipesh1903/bill-scanner',
        description: 'Scan bill to extract the product details',
        techStack: ['ReactJs', 'Typescript', 'HTML/CSS', 'Tainwindcss', 'firebase', 'google cloud vision']
    },
    {
        name: 'Easy Form',
        link: 'https://form-app-b5280.web.app/details',
        githubLink: 'https://github.com/dipesh1903/form-app',
        designLink: 'https://www.figma.com/design/ZkNmayx1dkeFsiNsqI0md8/Form-Screen?t=FJ565xXMu1c16nCT-0',
        description: 'App to get basic user details with OTP based authentication. Tweak it as per your need from the source code. Added support for i18n',
        techStack: ['ReactJs', 'Typescript', 'HTML/CSS', 'Tainwindcss', 'firebase']
    },
]

export const TECH_STACK = [
    'Angular(2+)',
    'ReactJs',
    'HTML/CSS',
    'Typescript',
    'Javascript',
    'Firebase',
    'Cloud Vision API',
    'NodeJs',
    'TailwindCss'
]

export const enum ActiveNav {
    ABOUT = 'ABOUT',
    EXPERIENCE = 'EXPERIENCE',
    PROJECTS = 'PROJECTS'
}