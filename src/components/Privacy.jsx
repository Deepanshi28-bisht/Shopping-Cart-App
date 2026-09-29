import Container from './Container'

const Privacy = () => {
  return (
   <section className='py-10'>
    <Container>
        <div className='flex flex-col items-start justify-center gap-4 w-full max-w-[1000px] mx-auto'>
            <h2 className='text-4xl text-center w-full'>Privacy Policy</h2>
            <h4 className='text-xl'>Last Updated: September 29, 2026</h4>
            <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you use our website and services.</p>
            <h2 className='text-xl'>1. Information We Collect</h2>
            <p className='text-xl'>When you use our website, we may collect the following information:</p>
            <ul className='flex flex-col items-start justify-center gap-2 list-disc'>
                <li>Create and manage your account.</li>
                <li>Process and manage your orders.</li>
                <li>Provide customer support.</li>
                <li>Improve our website, products, and services.</li>
                <li>Communicate with you about your account or orders.</li>
                <li>Detect and prevent fraudulent or unauthorized activities.</li>
                <li>Maintain the security and functionality of our website.</li>
            </ul>
             <h2 className='text-xl'>2. How We Use Your Information</h2>
            <p className='text-xl'>We may use the information we collect to:</p>
            <ul className='flex flex-col items-start justify-center gap-2 list-disc'>
                <li>Create and manage your account.</li>
                <li>Process and manage your orders.</li>
                <li>Provide customer support.</li>
                <li>Improve our website, products, and services.</li>
                <li>Communicate with you about your account or orders.</li>
                <li>Detect and prevent fraudulent or unauthorized activities.</li>
                <li>Maintain the security and functionality of our website.</li>
            </ul>
        </div>
    </Container>
   </section>
  )
}

export default Privacy