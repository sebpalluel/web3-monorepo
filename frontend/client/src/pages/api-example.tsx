export default function ApiExamplePage() {
    return (
        <div>
            <h1>API Example</h1>
            <p>
                The examples below show responses from the example API
                endpoints.
            </p>
            <p>
                <em>You must be signed in to see responses.</em>
            </p>
            <h2>Session</h2>
            <p>/api/examples/session</p>
            <iframe src="/api/examples/session" />
            <h2>JSON Web Token</h2>
            <p>/api/examples/jwt</p>
            <iframe src="/api/examples/jwt" />
            <summary>Hasura call</summary>
            <h2>Hasura call</h2>
            <p>/api/examples/h</p>
            <iframe src="/api/examples/hasura" />
        </div>
    )
}
