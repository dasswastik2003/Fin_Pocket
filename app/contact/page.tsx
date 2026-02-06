import ContactBanner from '@/components/contactSections/contactBanner'
import React from 'react'
import styles from "../../styles/contact/contacts.module.css";
import ContactDownload from '@/components/contactSections/contactDownload';
import ContactSection from '@/components/contactSections/ContactSection';

export default function Contact() {
    return (
        <main style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="grid"></div>
           
            {/* Contact Banner */}
            <ContactBanner />

            {/* contact part */}
            <ContactSection />

            <ContactDownload/>
        </main>
    )
}
