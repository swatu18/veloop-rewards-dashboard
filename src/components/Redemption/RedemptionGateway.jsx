import React, { useState } from 'react';
import { 
  CreditCard, 
  Gift, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Copy, 
  ExternalLink,
  Sparkles,
  ShoppingBag,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './RedemptionGateway.module.css';

const REDEMPTION_PARTNERS = [
  {
    id: 'amazon',
    name: 'Amazon Shopping Voucher',
    category: 'E-Commerce',
    costVEs: 500,
    valueINR: '₹500 Gift Card',
    icon: '📦',
    instantDelivery: true,
    inStock: true
  },
  {
    id: 'swiggy',
    name: 'Swiggy / Zomato Dining Voucher',
    category: 'Food & Dining',
    costVEs: 250,
    valueINR: '₹250 Gourmet Pass',
    icon: '🍔',
    instantDelivery: true,
    inStock: true
  },
  {
    id: 'bookmyshow',
    name: 'BookMyShow Movie Voucher',
    category: 'Entertainment',
    costVEs: 300,
    valueINR: '₹300 Cinema Voucher',
    icon: '🎟️',
    instantDelivery: true,
    inStock: true
  },
  {
    id: 'flipkart',
    name: 'Flipkart Electronics Voucher',
    category: 'Gadgets',
    costVEs: 1000,
    valueINR: '₹1,000 Electronics Code',
    icon: '⚡',
    instantDelivery: true,
    inStock: true
  }
];

export const RedemptionGateway = ({ isFullPage = false }) => {
  const { user, addVEs, triggerConfetti, setActiveScreen } = useDashboard();
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [redeemedCode, setRedeemedCode] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRedeem = (partner) => {
    if (user.veBalance < partner.costVEs) {
      alert(`Insufficient VEs! You need ${partner.costVEs} VEs. (Current Balance: ${user.veBalance} VEs)`);
      return;
    }

    setIsProcessing(true);
    setSelectedPartner(partner);

    // Simulate webhook dispatch & cryptographic voucher generation
    setTimeout(() => {
      setIsProcessing(false);
      const generatedCode = `VELOOP-${partner.id.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setRedeemedCode(generatedCode);
      addVEs(-partner.costVEs, `Redeemed ${partner.name}`);
      triggerConfetti();
    }, 1200);
  };

  const handleCopyCode = () => {
    if (!redeemedCode) return;
    navigator.clipboard.writeText(redeemedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          {isFullPage && (
            <button 
              className={styles.backBtn}
              onClick={() => setActiveScreen('dashboard')}
              aria-label="Back to Dashboard"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div className={styles.iconBadge}>
            <Gift size={18} className={styles.giftIcon} />
          </div>
          <div>
            <h3 className={styles.title}>INSTANT REDEMPTION GATEWAY &amp; VOUCHERS</h3>
            <span className={styles.subtitle}>
              Exchange your earned VEs directly into Amazon, Swiggy, and Flipkart e-vouchers
            </span>
          </div>
        </div>

        {/* Live Wallet Pill */}
        <div className={styles.walletPill}>
          <span className={styles.walletLabel}>Available Balance:</span>
          <span className={styles.walletValue}>{user.veBalance.toLocaleString()} VEs</span>
        </div>
      </div>

      {/* Partners Grid */}
      <div className={styles.partnersGrid}>
        {REDEMPTION_PARTNERS.map((partner) => {
          const canAfford = user.veBalance >= partner.costVEs;

          return (
            <div key={partner.id} className={styles.partnerCard}>
              <div className={styles.partnerTop}>
                <span className={styles.partnerIcon}>{partner.icon}</span>
                <span className={styles.instantBadge}>⚡ Instant Webhook</span>
              </div>

              <div className={styles.partnerInfo}>
                <h4 className={styles.partnerName}>{partner.name}</h4>
                <span className={styles.partnerValue}>{partner.valueINR}</span>
              </div>

              <div className={styles.partnerFooter}>
                <div className={styles.costCol}>
                  <span className={styles.costLabel}>Voucher Cost</span>
                  <span className={styles.costVal}>{partner.costVEs} VEs</span>
                </div>

                <button 
                  className={canAfford ? styles.redeemBtn : styles.disabledBtn}
                  onClick={() => handleRedeem(partner)}
                  disabled={!canAfford || isProcessing}
                >
                  {isProcessing && selectedPartner?.id === partner.id ? (
                    <span>Dispatching...</span>
                  ) : canAfford ? (
                    <>
                      <span>Redeem</span>
                      <ArrowRight size={14} />
                    </>
                  ) : (
                    <span>Locked</span>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Success Modal / Voucher Code Display */}
      {redeemedCode && (
        <div className={styles.codeModalOverlay} onClick={() => setRedeemedCode(null)}>
          <div className={styles.codeModalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.successIconBadge}>
              <CheckCircle size={32} className={styles.checkIcon} />
            </div>

            <h3 className={styles.modalTitle}>Voucher Delivered Successfully!</h3>
            <p className={styles.modalSub}>
              Webhook confirmed! Your {selectedPartner?.name} has been processed and ready to use.
            </p>

            <div className={styles.codeBox}>
              <span className={styles.voucherCode}>{redeemedCode}</span>
              <button className={styles.copyBtn} onClick={handleCopyCode}>
                <Copy size={15} />
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className={styles.trustFooter}>
              <ShieldCheck size={14} />
              <span>Valid across India on merchant websites &amp; mobile apps</span>
            </div>

            <button className={styles.doneBtn} onClick={() => setRedeemedCode(null)}>
              Done &amp; Return
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
