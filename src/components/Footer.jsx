import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101315] text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">
          Made by Anurag Gaur. Courtesy of{' '}
          <a href="https://openlibrary.org/" className="underline">
            Open Library
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
