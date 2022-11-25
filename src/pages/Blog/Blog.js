import React from 'react';

const Blog = () => {
    return (
        <div className='text-white'>
            {/* question-1 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-800">
                <div className="collapse-title text-2xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content text-xl">
                    <p>There are four main types of state you need to properly manage in your React apps:

                        <p>1.Local state
                            2.Global state
                            3.Server state
                            4.URL state</p>
                    </p>
                    <p> Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.</p>
                    <p>Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>

                    <p>Server state – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                    <p>URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state.</p>
                </div>
            </div>
            {/* question-2 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-cyan-800">
                <div className="collapse-title text-2xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content text-xl">
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]].The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    <p>
                        The object referenced by [[Prototype]] is called a “prototype”.
                        If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
                        Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
                        If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
                        The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.
                    </p>
                </div>
            </div>
            {/* question-3 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-800">
                <div className="collapse-title text-2xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content text-xl">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                    <p>
                        A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                        Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
                    </p>
                    <p>Unit tests can be performed manually or automated. Those employing a manual method may have an instinctual document made detailing each step in the process; however, automated testing is the more common method to unit tests. Automated approaches commonly use a testing framework to develop test cases. These frameworks are also set to flag and report any failed test cases while also providing a summary of test cases.</p>
                </div>
            </div>
            {/* question-4 */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-cyan-800">
                <div className="collapse-title text-2xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content text-xl">
                    <p>This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.

                        There are primarily three reasons which have made the React library a developer darling -

                        Code Reusability- it allows developers to reuse blocks of code for a simple function

                        Ease-of-use - React, though tougher than Vue, has a less steep learning curve than Angular JS.

                        Customizable - The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification.</p>
                    <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.

                        The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules</p>
                    <p>Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex</p>
                    <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

                        Enhancing static HTML without a build step
                        Embedding as Web Components on any page
                        Single-Page Application (SPA)
                        Fullstack / Server-Side Rendering (SSR)
                        Jamstack / Static Site Generation (SSG)
                        Targeting desktop, mobile, WebGL, and even the terminal</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
