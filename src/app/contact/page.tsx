import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-10 min-h-screen flex flex-wrap justify-center items-center">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  )
}