# Technical Leaders Funnel Architecture

```mermaid
flowchart TD
    %% Top of Funnel
    ICP[B2C Ideal Client Profile]
    LinkedIn[Build LinkedIn Connections]

    %% Content Distribution
    Organic[80/20 Content<br/>Organic Posts]
    PaidContent[5130 Offers<br/>Paid Content]
    PaidAds[100-Lead Bundle<br/>Paid Ads]

    %% Triage
    Triage[Sell By Chat<br/>DM Triage]

    %% Primary Actions
    Content[Share Content<br/>To Binge]
    IntroCall[Intro Call<br/>technical-leaders.com/call]
    FollowUp[Follow Up<br/>]

    %% Nurture Sequences
    NewLeadNurture[14-day New Lead Email Nurture]
    EmailNurture[Weekly Nurture Emails]

    %% Sales Engagement
    SellByChatDoc[Monthly<br/>Offer Campaign]
    StrategySession[Strategy<br/>Session]

    %% Final Conversion
    CAP[Join<br/>Tech Leaders<br/>Program]

    %% Flow connections
    ICP --> LinkedIn
    LinkedIn --> Organic
    ICP --> PaidAds
    LinkedIn --> PaidContent
    Organic --> Triage
    PaidContent --> Triage
    PaidAds --> NewLeadNurture

    %% Funnel Flow
    Triage --> Content
    Triage --> IntroCall
    Content --> FollowUp
    FollowUp --> IntroCall

    IntroCall --> StrategySession

    NewLeadNurture --> EmailNurture
    NewLeadNurture --> IntroCall

    EmailNurture --> IntroCall
    EmailNurture --> SellByChatDoc


    SellByChatDoc --> CAP
    StrategySession --> CAP

    %% Styling
    classDef entryPoint fill:#e6f3e6,stroke:#4a854a,stroke-width:2px,color:#000
    classDef content fill:#e6f0ff,stroke:#4169e1,stroke-width:2px,color:#000
    classDef action fill:#fff9e6,stroke:#ffa500,stroke-width:3px,color:#000
    classDef nurture fill:#f0e6ff,stroke:#8a2be2,stroke-width:2px,color:#000
    classDef sales fill:#e6ffe6,stroke:#32cd32,stroke-width:3px,color:#000
    classDef automated fill:#e6ffe6,stroke:#32cd32,stroke-width:3px,color:#000
    classDef final fill:#000,stroke:#000,stroke-width:3px,color:#fff

    class ICP,LinkedIn entryPoint
    class Organic,PaidAds,PaidContent content
    class Content action
    class PaidAds,NewLeadNurture,EmailNurture automated
    class IntroCall,StrategySession,SellByChatDoc sales
    class CAP final
```

## Funnel Overview

This diagram represents the Technical Leaders customer acquisition funnel with the following stages:

1. **Entry Points**: B2C Ideal Customer Profile leads to building LinkedIn connections
2. **Content Distribution**: Three channels:
   - **Organic Posts**: 80/20 content strategy
   - **Paid Content**: 5130 offers
   - **Paid Ads**: 100-lead bundle (flows directly to email nurture)
3. **Triage**: Sell By Chat DM triage for organic and paid content leads
4. **Primary Actions**: Two main paths from triage:
   - **Share Content To Binge**: Leading to follow-up
   - **Intro Call**: Direct scheduling
5. **Nurture Sequences**:
   - **14-day New Lead Email Nurture**: For paid ad leads
   - **Weekly Nurture Emails**: Ongoing engagement
6. **Sales Engagement**:
   - **Monthly Offer Campaign**: From email nurture
   - **Strategy Session**: From intro calls
7. **Final Conversion**: Tech Leaders Program enrollment

The color coding helps distinguish between different funnel stages:
- Green: Entry points
- Blue: Content distribution
- Yellow: Primary actions
- Purple: Nurture sequences
- Light green: Sales engagement
- Red: Final conversion