# Organization Chart

```mermaid
graph TD
    TL[Tech Leaders]
    TL1[Tech Leaders EU]
    TL2[Tech Leaders US]
    B8[Bottega8]

    Todd[Todd Larsen - Co-Founder]
    Stephen[Stephen Bates - Co-Founder]
    John[John Chapman - GM / Coach]
    Nick[Nick Talwar - Founder]
    Amelia[Amelia Leigner - CMO]
    Lindsay[Lindsay Gould - AI Operations Intern]
    VAs[Virtual Assistants]
    Harry[Harry Gladwin - Sales Advisor]


    TL --> TL1
    TL --> TL2
    TL2 --> Todd
    TL1 --> Stephen
    B8 --> Nick

    Stephen --> John
    Todd --> Amelia
    Todd --> Harry
    Nick --> Amelia
    Nick --> Lindsay

    Amelia -.-> Lindsay
    Todd -.-> Lindsay

    John --> VAs
    Amelia --> VAs

    TL2 <-.Partnership.-> B8

    classDef company fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
    classDef leader fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#fff
    classDef va fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff

    class TL,B8,TL1,TL2 company
    class Todd,Stephen,John,Nick,Amelia leader
    class VAs,Harry,Lindsay va
```

## Company Structure

### Tech Leaders
- **Todd** - Co-Founder
- **Stephen** - Co-Founder
- **John** - CTO
- **Amelia** - VP Marketing
- **Virtual Assistants** - Support Staff
- **Harry** - Sales Advisor

### Bottega8
- **Nick** - Founder
- **Lindsay** - (Reports to Nick with dotted line connections to Todd and Amelia)

### Partnership
- Tech Leaders and Bottega8 maintain a strategic partnership through the founders