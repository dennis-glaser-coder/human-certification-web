export function isPilotRecord(record) {
  return record.status === 'pilot' || record.certification_context === 'connected_pilot';
}

export function hasRelationship(record) {
  return record.certification_context === 'connected_standard'
    || record.certification_context === 'connected_pilot'
    || Boolean(record.relationship_disclosure?.trim());
}
