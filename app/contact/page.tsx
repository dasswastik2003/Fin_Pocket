import ContactBanner from '@/components/contactSections/contactBanner'
import React from 'react'
import styles from "../../styles/contact/contacts.module.css";
import ContactSection from '@/components/contactSections/ContactSection';
import DownloadSection from '@/components/homeSections/HomeDownload';

export default function Contact() {
    return (
        <main style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="grid"></div>
           
            {/* Contact Banner */}
            <ContactBanner />

            {/* contact part */}
            <ContactSection />

            <DownloadSection/>
        </main>
    )
}
