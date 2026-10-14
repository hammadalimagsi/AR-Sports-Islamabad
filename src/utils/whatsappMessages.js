/**
 * Helper to build well-formatted, professional WhatsApp inquiry messages.
 * Note: Never includes prices as prices are confirmed exclusively via WhatsApp.
 */

// 1. Single Product Inquiry
export function buildProductInquiryMessage({ product, selectedVariant, selectedSize, quantity = 1, notes = "" }) {
  let msg = `Assalam-o-Alaikum AR Sports!\n\n`;
  msg += `I want to inquire about this product:\n\n`;
  msg += `• Product: ${product.name}\n`;
  msg += `• Category: ${product.sport} / ${product.category}\n`;
  if (selectedVariant) {
    msg += `• Variant / Color: ${selectedVariant}\n`;
  }
  if (selectedSize) {
    msg += `• Size: ${selectedSize}\n`;
  }
  msg += `• Quantity: ${quantity}\n`;
  if (notes) {
    msg += `• Additional Notes: ${notes}\n`;
  }
  msg += `\nPlease confirm the final price, delivery charges, and delivery time.`;
  return msg;
}

// 2. Custom Kit / Garment Designer Inquiry
export function buildCustomDesignInquiryMessage({
  sport,
  productType,
  designPattern,
  primaryColor,
  secondaryColor,
  playerName,
  playerNumber,
  size,
  quantity,
  teamName,
  hasLogo,
  includePantsAndSocks,
  additionalNotes
}) {
  let msg = `Assalam-o-Alaikum AR SPORTS ISLAMABAD!\n\n`;
  msg += `I want to place an order inquiry for custom jerseys / teamwear:\n\n`;
  msg += `• Sport: ${sport}\n`;
  msg += `• Jersey Type: ${productType}${includePantsAndSocks ? ' (Complete Kit with Pants/Shorts & Socks)' : ''}\n`;
  msg += `• Design Pattern: ${designPattern}\n`;
  msg += `• Primary Color: ${primaryColor}\n`;
  msg += `• Secondary Color: ${secondaryColor}\n`;
  msg += `• Customer / Player Name: ${playerName || 'N/A'}\n`;
  msg += `• Jersey Number: ${playerNumber || 'N/A'}\n`;
  if (teamName) {
    msg += `• Team / Club Name: ${teamName}\n`;
  }
  msg += `• Size: ${size}\n`;
  msg += `• Quantity: ${quantity} ${quantity === 1 ? 'piece' : 'pieces'}\n`;
  msg += `• Logo: ${hasLogo ? 'Logo preview uploaded on website (High-res image/vector file will be attached in this chat)' : 'No custom logo requested'}\n`;
  if (additionalNotes) {
    msg += `• Additional Instructions: ${additionalNotes}\n`;
  }
  msg += `\nPlease provide the final custom quote, 3D design proof confirmation, and delivery schedule.`;
  return msg;
}

// 3. Team / School Bulk Orders Inquiry (with roster of players)
export function buildTeamOrderInquiryMessage({
  teamName,
  organizationType, // School, Academy, Club, Corporate
  sport,
  kitType,
  deliveryCity,
  notes,
  players = []
}) {
  let msg = `Assalam-o-Alaikum AR Sports!\n\n`;
  msg += `I want to place a Bulk Team/School order inquiry:\n\n`;
  msg += `• Organization / Team: ${teamName}\n`;
  msg += `• Type: ${organizationType}\n`;
  msg += `• Sport: ${sport}\n`;
  msg += `• Kit Type: ${kitType}\n`;
  msg += `• Total Uniforms: ${players.length}\n`;
  if (deliveryCity) {
    msg += `• Delivery City/Region: ${deliveryCity}\n`;
  }
  if (notes) {
    msg += `• Special Instructions: ${notes}\n`;
  }
  
  msg += `\n--- PLAYER ROSTER & SIZES (${players.length} Players) ---\n`;
  players.forEach((p, idx) => {
    msg += `${idx + 1}. Name: ${p.name || 'Unprinted'} | No: ${p.number || '-'} | Size: ${p.size}${p.role ? ` (${p.role})` : ''}\n`;
  });

  msg += `\nPlease confirm the quote for this team roster, fabric options, sample preview, and delivery schedule.`;
  return msg;
}

// 4. Cart Multi-Product Inquiry
export function buildCartInquiryMessage(cartItems = []) {
  let msg = `Assalam-o-Alaikum AR Sports!\n\n`;
  msg += `I would like to inquire about an order with multiple items from the AR SPORTS store:\n\n`;
  
  cartItems.forEach((item, index) => {
    msg += `[Item ${index + 1}] ${item.name}\n`;
    msg += `• Sport / Category: ${item.sport || 'Sports'}\n`;
    if (item.customDetails) {
      const cd = item.customDetails;
      msg += `• Custom Kit: ${cd.productType || ''} | Pattern: ${cd.pattern || 'Standard'}\n`;
      msg += `• Colors: ${cd.primaryColor} / ${cd.secondaryColor}\n`;
      if (cd.teamName) msg += `• Team Name: ${cd.teamName}\n`;
      if (cd.playerName) msg += `• Name: ${cd.playerName} | No: ${cd.playerNumber}\n`;
      if (cd.size) msg += `• Size: ${cd.size}\n`;
    } else {
      if (item.selectedSize) msg += `• Size: ${item.selectedSize}\n`;
      if (item.selectedVariant) msg += `• Variant: ${item.selectedVariant}\n`;
    }
    msg += `• Quantity: ${item.quantity}\n\n`;
  });

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  msg += `Total Items: ${cartItems.length} (${totalQuantity} total pieces)\n\n`;
  msg += `Please provide the comprehensive quote, package discounts if applicable, and expected delivery timeline.`;
  return msg;
}

// 5. General Contact / Custom Inquiry
export function buildGeneralContactInquiryMessage({ fullName, email, phone, subject, message }) {
  let msg = `Assalam-o-Alaikum AR Sports!\n\n`;
  msg += `I have a general inquiry from your website:\n\n`;
  msg += `• Name: ${fullName}\n`;
  if (phone) msg += `• Phone: ${phone}\n`;
  if (email) msg += `• Email: ${email}\n`;
  msg += `• Subject: ${subject}\n`;
  msg += `• Message:\n${message}\n\n`;
  msg += `Looking forward to your response!`;
  return msg;
}
