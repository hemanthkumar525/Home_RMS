
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl prose lg:prose-xl">
        <h1>Terms of Service</h1>
        <p className="text-gray-500">Last updated: October 27, 2023</p>

        <p>
          Welcome to RentEase. These terms and conditions outline the rules and regulations for the use of RentEase's Website, located at rentease.example.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use RentEase if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>1. License</h2>
        <p>
          Unless otherwise stated, RentEase and/or its licensors own the intellectual property rights for all material on RentEase. All intellectual property rights are reserved. You may access this from RentEase for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>
          You must not:
        </p>
        <ul>
          <li>Republish material from RentEase</li>
          <li>Sell, rent or sub-license material from RentEase</li>
          <li>Reproduce, duplicate or copy material from RentEase</li>
          <li>Redistribute content from RentEase</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        
        <h2>4. Governing Law</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the State of New York, and you submit to the non-exclusive jurisdiction of the state and federal courts located in New York for the resolution of any disputes.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
