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

/** This is an auto generated class representing the CreditTransaction type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "CreditTransactions", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "profileOwner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
}, hasLazySupport = true)
public final class CreditTransaction implements Model {
  public static final CreditTransactionPath rootPath = new CreditTransactionPath("root", false, null);
  public static final QueryField ID = field("CreditTransaction", "id");
  public static final QueryField FROM_ACCOUNT = field("CreditTransaction", "fromAccount");
  public static final QueryField TRANS_TYPE = field("CreditTransaction", "transType");
  public static final QueryField PROVIDER_NAME = field("CreditTransaction", "providerName");
  public static final QueryField PROVIDER_TYPE = field("CreditTransaction", "providerType");
  public static final QueryField AMOUNT = field("CreditTransaction", "amount");
  public static final QueryField USER_PROFILES = field("CreditTransaction", "profileId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String fromAccount;
  private final @ModelField(targetType="String") String transType;
  private final @ModelField(targetType="String") String providerName;
  private final @ModelField(targetType="String") String providerType;
  private final @ModelField(targetType="String") String amount;
  private final @ModelField(targetType="UserProfile") @BelongsTo(targetName = "profileId", targetNames = {"profileId"}, type = UserProfile.class) ModelReference<UserProfile> userProfiles;
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
  
  public ModelReference<UserProfile> getUserProfiles() {
      return userProfiles;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private CreditTransaction(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> userProfiles) {
    this.id = id;
    this.fromAccount = fromAccount;
    this.transType = transType;
    this.providerName = providerName;
    this.providerType = providerType;
    this.amount = amount;
    this.userProfiles = userProfiles;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      CreditTransaction creditTransaction = (CreditTransaction) obj;
      return ObjectsCompat.equals(getId(), creditTransaction.getId()) &&
              ObjectsCompat.equals(getFromAccount(), creditTransaction.getFromAccount()) &&
              ObjectsCompat.equals(getTransType(), creditTransaction.getTransType()) &&
              ObjectsCompat.equals(getProviderName(), creditTransaction.getProviderName()) &&
              ObjectsCompat.equals(getProviderType(), creditTransaction.getProviderType()) &&
              ObjectsCompat.equals(getAmount(), creditTransaction.getAmount()) &&
              ObjectsCompat.equals(getUserProfiles(), creditTransaction.getUserProfiles()) &&
              ObjectsCompat.equals(getCreatedAt(), creditTransaction.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), creditTransaction.getUpdatedAt());
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
      .append(getUserProfiles())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("CreditTransaction {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("fromAccount=" + String.valueOf(getFromAccount()) + ", ")
      .append("transType=" + String.valueOf(getTransType()) + ", ")
      .append("providerName=" + String.valueOf(getProviderName()) + ", ")
      .append("providerType=" + String.valueOf(getProviderType()) + ", ")
      .append("amount=" + String.valueOf(getAmount()) + ", ")
      .append("userProfiles=" + String.valueOf(getUserProfiles()) + ", ")
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
  public static CreditTransaction justId(String id) {
    return new CreditTransaction(
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
      userProfiles);
  }
  public interface BuildStep {
    CreditTransaction build();
    BuildStep id(String id);
    BuildStep fromAccount(String fromAccount);
    BuildStep transType(String transType);
    BuildStep providerName(String providerName);
    BuildStep providerType(String providerType);
    BuildStep amount(String amount);
    BuildStep userProfiles(UserProfile userProfiles);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String fromAccount;
    private String transType;
    private String providerName;
    private String providerType;
    private String amount;
    private ModelReference<UserProfile> userProfiles;
    public Builder() {
      
    }
    
    private Builder(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> userProfiles) {
      this.id = id;
      this.fromAccount = fromAccount;
      this.transType = transType;
      this.providerName = providerName;
      this.providerType = providerType;
      this.amount = amount;
      this.userProfiles = userProfiles;
    }
    
    @Override
     public CreditTransaction build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new CreditTransaction(
          id,
          fromAccount,
          transType,
          providerName,
          providerType,
          amount,
          userProfiles);
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
     public BuildStep userProfiles(UserProfile userProfiles) {
        this.userProfiles = new LoadedModelReferenceImpl<>(userProfiles);
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
    private CopyOfBuilder(String id, String fromAccount, String transType, String providerName, String providerType, String amount, ModelReference<UserProfile> userProfiles) {
      super(id, fromAccount, transType, providerName, providerType, amount, userProfiles);
      
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
     public CopyOfBuilder userProfiles(UserProfile userProfiles) {
      return (CopyOfBuilder) super.userProfiles(userProfiles);
    }
  }
  

  public static class CreditTransactionIdentifier extends ModelIdentifier<CreditTransaction> {
    private static final long serialVersionUID = 1L;
    public CreditTransactionIdentifier(String id) {
      super(id);
    }
  }
  
}
