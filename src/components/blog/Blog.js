import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
           
           
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
                <h3 className="font-semibold text-xl">Difference between SQL and NoSQL</h3>
                <p className="mt-1 dark:text-gray-400">
                    SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.
                    Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                    Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                </p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">What is JWT, and how does it work?</h3>
                    <p className="mt-1 dark:text-gray-400">JSON Web Token is short form of jwt, is an open standard used to share security information between two parties a client and a server. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                </div>
                <div>
                    <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                    <p className="mt-1 dark:text-gray-400">Javascript is a programming language that is used for writing scripts on the website or NodeJS is a Javascript runtime environment.
                    Javascript can only be run in the browsers or Nodejs help run Javascript outside the browser with the help of NodeJS.javascript basically used on the client-side or Nodejs mostly used on the server-side.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="mt-1 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an EventLoop is the listener for the EventQueue.
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog;