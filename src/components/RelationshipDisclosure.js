import { hasRelationship } from '../lib/certification';

export default function RelationshipDisclosure({ record, lang = 'de', className = 'publicNote' }) {
  if (!hasRelationship(record)) return null;
  const english = lang === 'en';
  return (
    <div className={className}>
      <strong>{english ? 'Relationship to the scheme owner' : 'Verbindung zum Systeminhaber'}</strong>
      {record.relationship_disclosure && <p>{record.relationship_disclosure}</p>}
      <p>{english ? 'This is not an independent third-party assessment.' : 'Dies ist keine unabhängige Drittprüfung.'}</p>
    </div>
  );
}
