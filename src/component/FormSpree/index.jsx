import './style.css';

import { useForm, ValidationError } from '@formspree/react';
function FormSpree() {
    const [state, handleSubmit] = useForm('mzbylzyq');
    if (state.succeeded) {
        return (
            <p className="submitResponse">
                Je vous recontacte des que j'ai pris connaissance de votre
                message. A bientôt !!
            </p>
        );
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nom"
                id="name"
                type="text"
                name="name"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <input
                placeholder="Adresse Email"
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                placeholder="Votre message"
                id="message"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default FormSpree;
