import { getBuiltGraphSDK } from '@boilerplate/gql-thegraph';
import { useQuery } from '@tanstack/react-query';

const sdk = getBuiltGraphSDK();

export default function BlockchainPage() {
  const result = useQuery(['ExampleQuery'], () => sdk.ExampleQuery());

  const { data, isLoading, error, refetch } = result;
  return (
    <div className="App">
      <header className="App-header">
        <p>Graph Client with React Query Example</p>
        <p>
          <button type="button" onClick={() => refetch()} disabled={isLoading}>
            Re Execute Query
          </button>
        </p>
        <p>{isLoading ? 'Loading...' : 'You can find the result below...'}</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {error && (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(error, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  );
}
