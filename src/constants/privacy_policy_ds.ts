export interface PrivacyPolicySection {
  number: number;
  title: string;
  content: {
    type: 'paragraph' | 'list';
    text?: string;
    items?: string[];
    highlight?: boolean;
    italic?: boolean;
  }[];
}

export const privacyPolicyArray: PrivacyPolicySection[] = [
  {
    number: 2,
    title: 'How We Use Your Information',
    content: [
      { type: 'paragraph', text: 'We use the information collected to:' },
      {
        type: 'list',
        items: [
          'Respond to enquiries and requests',
          'Provide consulting, implementation, and support services',
          'Improve our website and user experience',
          'Share proposals, quotations, and service information',
          'Send updates, newsletters, or marketing communications (with consent where required)',
          'Maintain security and prevent fraud',
          'Comply with legal obligations'
        ]
      }
    ]
  },
  {
    number: 3,
    title: 'Cookies & Tracking Technologies',
    content: [
      {
        type: 'paragraph',
        text: 'Our website may use cookies and similar technologies to improve browsing experience, analyze traffic, and understand visitor behavior.'
      },
      {
        type: 'paragraph',
        text: 'You may disable cookies through your browser settings; however, some website features may not function properly.'
      }
    ]
  },
  {
    number: 4,
    title: 'Data Sharing & Disclosure',
    content: [
      {
        type: 'paragraph',
        text: 'CloudVandexa does not sell your personal data.',
        highlight: true
      },
      {
        type: 'paragraph',
        text: 'We may share information only in the following situations:'
      },
      {
        type: 'list',
        items: [
          'With trusted service providers supporting our business operations',
          'With implementation partners where required for service delivery',
          'If required by law, regulation, or legal request',
          'To protect our rights, systems, or users'
        ]
      },
      {
        type: 'paragraph',
        text: 'All third parties are expected to maintain confidentiality and data protection standards.',
        italic: true
      }
    ]
  },
  {
    number: 5,
    title: 'Data Security',
    content: [
      {
        type: 'paragraph',
        text: 'We implement commercially reasonable technical and organizational measures to protect your information from unauthorized access, misuse, alteration, or disclosure.'
      },
      {
        type: 'paragraph',
        text: 'While we strive for strong security, no online transmission or storage system can be guaranteed 100% secure.'
      }
    ]
  },
  {
    number: 6,
    title: 'Data Retention',
    content: [
      {
        type: 'paragraph',
        text: 'We retain personal information only as long as necessary for:'
      },
      {
        type: 'list',
        items: [
          'Business operations',
          'Service delivery',
          'Legal compliance',
          'Resolving disputes',
          'Record keeping'
        ]
      },
      {
        type: 'paragraph',
        text: 'Once no longer required, data may be securely deleted or anonymized.',
        highlight: true
      }
    ]
  },
  {
    number: 7,
    title: 'Your Rights',
    content: [
      {
        type: 'paragraph',
        text: 'Subject to applicable laws, you may request to:'
      },
      {
        type: 'list',
        items: [
          'Access your personal data',
          'Correct inaccurate information',
          'Delete your information',
          'Withdraw marketing consent',
          'Request data portability (where applicable)'
        ]
      },
      {
        type: 'paragraph',
        text: 'To exercise any rights, please contact us using the details below.'
      }
    ]
  },
  {
    number: 8,
    title: 'Third-Party Links',
    content: [
      {
        type: 'paragraph',
        text: 'Our website may contain links to external websites. CloudVandexa is not responsible for the privacy practices or content of third-party websites. We encourage users to review their privacy policies separately.'
      }
    ]
  },
  {
    number: 9,
    title: "Children's Privacy",
    content: [
      {
        type: 'paragraph',
        text: 'Our services are intended for businesses and individuals above the age required under applicable laws. We do not knowingly collect personal data from children.'
      }
    ]
  },
  {
    number: 10,
    title: 'Updates to This Policy',
    content: [
      {
        type: 'paragraph',
        text: 'We may revise this Privacy Policy from time to time. Updated versions will be posted on this page with a revised "Last Updated" date.'
      }
    ]
  },
  {
    number: 11,
    title: 'Contact Us',
    content: [
      {
        type: 'paragraph',
        text: `If you have any questions regarding this Privacy Policy or your personal data, please contact us.`
      }
    ]
  }
];
