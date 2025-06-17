# Organization Chart

```mermaid
graph TD
    TL[Tech Leaders]
    B8[Bottega8]

    Todd[Todd - Co-Founder]
    Stephen[Stephen - Co-Founder]
    John[John - GM & Coach]
    Nick[Nick - Founder]
    Amelia[Amelia - Marketing]
    Lindsay[Lindsay]
    VAs1[Virtual Assistants Pod 1]
    VAs2[Virtual Assistants Pod 2]

    TL --> Todd
    TL --> Stephen
    B8 --> Nick

    Stephen --> John
    Todd --> Amelia
    Nick --> Amelia
    Nick --> Lindsay

    Lindsay -.-> Todd
    Lindsay -.-> Amelia

    John --> VAs1
    Amelia --> VAs2

    TL <-.Partnership.-> B8

    classDef company fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
    classDef leader fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    classDef va fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff

    class TL,B8 company
    class Todd,Stephen,John,Nick,Amelia,Lindsay leader
    class VAs1,VAs2 va
```

## Company Structure

### Tech Leaders
- **Todd** - Co-Founder
- **Stephen** - Co-Founder
- **John** - CTO
- **Amelia** - VP Marketing
- **Virtual Assistants Pod 1** - Support Staff
- **Virtual Assistants Pod 2** - Support Staff

### Bottega8
- **Nick** - Founder
- **Lindsay** - (Reports to Nick with dotted line connections to Todd and Amelia)

### Partnership
- Tech Leaders and Bottega8 maintain a strategic partnership through the founders