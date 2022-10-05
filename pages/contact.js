import Layout from "../components/layout";
import ContactForm from "../components/contactform";

function Contact() {
    return(
        <Layout>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Contact Us</h1>
            <ContactForm/>
        </Layout>
    )
}

export default Contact;