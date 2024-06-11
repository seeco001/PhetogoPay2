package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.BelongsTo;
import com.amplifyframework.core.model.ModelReference;
import com.amplifyframework.core.model.LoadedModelReferenceImpl;
import com.amplifyframework.core.model.temporal.Temporal;
import com.amplifyframework.core.model.ModelIdentifier;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the WalletTransaction type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "WalletTransactions", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "profileOwner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
}, hasLazySupport = true)
public final class WalletTransaction implements Model {
  public static final WalletTransactionPath rootPath = new WalletTransactionPath("root", false, null);
  public static final QueryField ID = field("WalletTransaction", "id");
  public static final QueryField FROM_ACCOUNT = field("WalletTransaction", "fromAccount");
  public static final QueryField TRANS_TYPE = field("WalletTransaction", "transType");
  public static final QueryField PROVIDER_NAME = field("WalletTransaction", "providerName");
  public static final QueryField PROVIDER_TYPE = field("WalletTransaction", "providerType");
  public static final QueryField AMOUNT = field("WalletTransaction", "amount");
  public static final QueryField ACTIVE_PROFILE = field("WalletTransaction", "walletTransactionId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String fromAccount;
  private final @ModelField(targetType="String") String transType;
  private final @ModelField(targetType="String") String providerName;
  private final @ModelField(targetType="String") String providerType;
  private final @ModelField(targetType="String") String amount;
  private final @ModelField(targetType="UserProfile") @BelongsTo(targetName = "walletTransactionId", targetNames = {"walletTransactionId"}, type = UserProfile.class) ModelReference<UserProfile> activeProfile;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime createdAt;
  private @ModelField(targetType="AWSDateTime", isReadOnly = true) Temporal.DateTime updatedAt;
  /** @deprecated This API is internal to Amplify and should not be used. */
  @Deprecated
   public String resolveIdentifier() {
    return id;
  }
  
  public String getId() {
      return id;
  }
  
  public String getFromAccount() {
      return fromAccount;
  }
  
  public String getTransType() {
      return transType;
  }
  
  public String getProviderName() {
      return providerName;
  }
  
  public String getProviderType() {
      return providerType;
  }
  
  public String getAmount() {
      return amount;
  }
  
  public ModelReference<UserProfile> getActiveProfile() {
      return activeProfile;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private WalletTransaction(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> activeProfile) {
    this.id = id;
    this.fromAccount = fromAccount;
    this.transType = transType;
    this.providerName = providerName;
    this.providerType = providerType;
    this.amount = amount;
    this.activeProfile = activeProfile;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      WalletTransaction walletTransaction = (WalletTransaction) obj;
      return ObjectsCompat.equals(getId(), walletTransaction.getId()) &&
              ObjectsCompat.equals(getFromAccount(), walletTransaction.getFromAccount()) &&
              ObjectsCompat.equals(getTransType(), walletTransaction.getTransType()) &&
              ObjectsCompat.equals(getProviderName(), walletTransaction.getProviderName()) &&
              ObjectsCompat.equals(getProviderType(), walletTransaction.getProviderType()) &&
              ObjectsCompat.equals(getAmount(), walletTransaction.getAmount()) &&
              ObjectsCompat.equals(getActiveProfile(), walletTransaction.getActiveProfile()) &&
              ObjectsCompat.equals(getCreatedAt(), walletTransaction.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), walletTransaction.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getFromAccount())
      .append(getTransType())
      .append(getProviderName())
      .append(getProviderType())
      .append(getAmount())
      .append(getActiveProfile())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("WalletTransaction {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("fromAccount=" + String.valueOf(getFromAccount()) + ", ")
      .append("transType=" + String.valueOf(getTransType()) + ", ")
      .append("providerName=" + String.valueOf(getProviderName()) + ", ")
      .append("providerType=" + String.valueOf(getProviderType()) + ", ")
      .append("amount=" + String.valueOf(getAmount()) + ", ")
      .append("activeProfile=" + String.valueOf(getActiveProfile()) + ", ")
      .append("createdAt=" + String.valueOf(getCreatedAt()) + ", ")
      .append("updatedAt=" + String.valueOf(getUpdatedAt()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /**
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   */
  public static WalletTransaction justId(String id) {
    return new WalletTransaction(
      id,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      fromAccount,
      transType,
      providerName,
      providerType,
      amount,
      activeProfile);
  }
  public interface BuildStep {
    WalletTransaction build();
    BuildStep id(String id);
    BuildStep fromAccount(String fromAccount);
    BuildStep transType(String transType);
    BuildStep providerName(String providerName);
    BuildStep providerType(String providerType);
    BuildStep amount(String amount);
    BuildStep activeProfile(UserProfile activeProfile);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String fromAccount;
    private String transType;
    private String providerName;
    private String providerType;
    private String amount;
    private ModelReference<UserProfile> activeProfile;
    public Builder() {
      
    }
    
    private Builder(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> activeProfile) {
      this.id = id;
      this.fromAccount = fromAccount;
      this.transType = transType;
      this.providerName = providerName;
      this.providerType = providerType;
      this.amount = amount;
      this.activeProfile = activeProfile;
    }
    
    @Override
     public WalletTransaction build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new WalletTransaction(
          id,
          fromAccount,
          transType,
          providerName,
          providerType,
          amount,
          activeProfile);
    }
    
    @Override
     public BuildStep fromAccount(String fromAccount) {
        this.fromAccount = fromAccount;
        return this;
    }
    
    @Override
     public BuildStep transType(String transType) {
        this.transType = transType;
        return this;
    }
    
    @Override
     public BuildStep providerName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    
    @Override
     public BuildStep providerType(String providerType) {
        this.providerType = providerType;
        return this;
    }
    
    @Override
     public BuildStep amount(String amount) {
        this.amount = amount;
        return this;
    }
    
    @Override
     public BuildStep activeProfile(UserProfile activeProfile) {
        this.activeProfile = new LoadedModelReferenceImpl<>(activeProfile);
        return this;
    }
    
    /**
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     */
    public BuildStep id(String id) {
        this.id = id;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> activeProfile) {
      super(id, fromAccount, transType, providerName, providerType, amount, activeProfile);
      
    }
    
    @Override
     public CopyOfBuilder fromAccount(String fromAccount) {
      return (CopyOfBuilder) super.fromAccount(fromAccount);
    }
    
    @Override
     public CopyOfBuilder transType(String transType) {
      return (CopyOfBuilder) super.transType(transType);
    }
    
    @Override
     public CopyOfBuilder providerName(String providerName) {
      return (CopyOfBuilder) super.providerName(providerName);
    }
    
    @Override
     public CopyOfBuilder providerType(String providerType) {
      return (CopyOfBuilder) super.providerType(providerType);
    }
    
    @Override
     public CopyOfBuilder amount(String amount) {
      return (CopyOfBuilder) super.amount(amount);
    }
    
    @Override
     public CopyOfBuilder activeProfile(UserProfile activeProfile) {
      return (CopyOfBuilder) super.activeProfile(activeProfile);
    }
  }
  

  public static class WalletTransactionIdentifier extends ModelIdentifier<WalletTransaction> {
    private static final long serialVersionUID = 1L;
    public WalletTransactionIdentifier(String id) {
      super(id);
    }
  }
  
}
