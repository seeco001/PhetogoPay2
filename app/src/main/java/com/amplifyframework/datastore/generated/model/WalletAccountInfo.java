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

/** This is an auto generated class representing the WalletAccountInfo type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "WalletAccountInfos", type = Model.Type.USER, version = 1, authRules = {
  @AuthRule(allow = AuthStrategy.OWNER, ownerField = "owner", identityClaim = "cognito:username", provider = "userPools", operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
}, hasLazySupport = true)
public final class WalletAccountInfo implements Model {
  public static final WalletAccountInfoPath rootPath = new WalletAccountInfoPath("root", false, null);
  public static final QueryField ID = field("WalletAccountInfo", "id");
  public static final QueryField WALLET_ACCOUNT = field("WalletAccountInfo", "walletAccount");
  public static final QueryField ACCOUNT_STATUS = field("WalletAccountInfo", "accountStatus");
  public static final QueryField AVAILABLE_BALANCE = field("WalletAccountInfo", "availableBalance");
  public static final QueryField USER_PROFILE = field("WalletAccountInfo", "walletAccountId");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String walletAccount;
  private final @ModelField(targetType="String") String accountStatus;
  private final @ModelField(targetType="Int") Integer availableBalance;
  private final @ModelField(targetType="UserProfile") @BelongsTo(targetName = "walletAccountId", targetNames = {"walletAccountId"}, type = UserProfile.class) ModelReference<UserProfile> userProfile;
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
  
  public String getWalletAccount() {
      return walletAccount;
  }
  
  public String getAccountStatus() {
      return accountStatus;
  }
  
  public Integer getAvailableBalance() {
      return availableBalance;
  }
  
  public ModelReference<UserProfile> getUserProfile() {
      return userProfile;
  }
  
  public Temporal.DateTime getCreatedAt() {
      return createdAt;
  }
  
  public Temporal.DateTime getUpdatedAt() {
      return updatedAt;
  }
  
  private WalletAccountInfo(String id, String walletAccount, String accountStatus, Integer availableBalance, ModelReference<UserProfile> userProfile) {
    this.id = id;
    this.walletAccount = walletAccount;
    this.accountStatus = accountStatus;
    this.availableBalance = availableBalance;
    this.userProfile = userProfile;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      WalletAccountInfo walletAccountInfo = (WalletAccountInfo) obj;
      return ObjectsCompat.equals(getId(), walletAccountInfo.getId()) &&
              ObjectsCompat.equals(getWalletAccount(), walletAccountInfo.getWalletAccount()) &&
              ObjectsCompat.equals(getAccountStatus(), walletAccountInfo.getAccountStatus()) &&
              ObjectsCompat.equals(getAvailableBalance(), walletAccountInfo.getAvailableBalance()) &&
              ObjectsCompat.equals(getUserProfile(), walletAccountInfo.getUserProfile()) &&
              ObjectsCompat.equals(getCreatedAt(), walletAccountInfo.getCreatedAt()) &&
              ObjectsCompat.equals(getUpdatedAt(), walletAccountInfo.getUpdatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getWalletAccount())
      .append(getAccountStatus())
      .append(getAvailableBalance())
      .append(getUserProfile())
      .append(getCreatedAt())
      .append(getUpdatedAt())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("WalletAccountInfo {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("walletAccount=" + String.valueOf(getWalletAccount()) + ", ")
      .append("accountStatus=" + String.valueOf(getAccountStatus()) + ", ")
      .append("availableBalance=" + String.valueOf(getAvailableBalance()) + ", ")
      .append("userProfile=" + String.valueOf(getUserProfile()) + ", ")
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
  public static WalletAccountInfo justId(String id) {
    return new WalletAccountInfo(
      id,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      walletAccount,
      accountStatus,
      availableBalance,
      userProfile);
  }
  public interface BuildStep {
    WalletAccountInfo build();
    BuildStep id(String id);
    BuildStep walletAccount(String walletAccount);
    BuildStep accountStatus(String accountStatus);
    BuildStep availableBalance(Integer availableBalance);
    BuildStep userProfile(UserProfile userProfile);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String walletAccount;
    private String accountStatus;
    private Integer availableBalance;
    private ModelReference<UserProfile> userProfile;
    public Builder() {
      
    }
    
    private Builder(String id, String walletAccount, String accountStatus, Integer availableBalance, ModelReference<UserProfile> userProfile) {
      this.id = id;
      this.walletAccount = walletAccount;
      this.accountStatus = accountStatus;
      this.availableBalance = availableBalance;
      this.userProfile = userProfile;
    }
    
    @Override
     public WalletAccountInfo build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new WalletAccountInfo(
          id,
          walletAccount,
          accountStatus,
          availableBalance,
          userProfile);
    }
    
    @Override
     public BuildStep walletAccount(String walletAccount) {
        this.walletAccount = walletAccount;
        return this;
    }
    
    @Override
     public BuildStep accountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    
    @Override
     public BuildStep availableBalance(Integer availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    
    @Override
     public BuildStep userProfile(UserProfile userProfile) {
        this.userProfile = new LoadedModelReferenceImpl<>(userProfile);
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
    private CopyOfBuilder(String id, String walletAccount, String accountStatus, Integer availableBalance, ModelReference<UserProfile> userProfile) {
      super(id, walletAccount, accountStatus, availableBalance, userProfile);
      
    }
    
    @Override
     public CopyOfBuilder walletAccount(String walletAccount) {
      return (CopyOfBuilder) super.walletAccount(walletAccount);
    }
    
    @Override
     public CopyOfBuilder accountStatus(String accountStatus) {
      return (CopyOfBuilder) super.accountStatus(accountStatus);
    }
    
    @Override
     public CopyOfBuilder availableBalance(Integer availableBalance) {
      return (CopyOfBuilder) super.availableBalance(availableBalance);
    }
    
    @Override
     public CopyOfBuilder userProfile(UserProfile userProfile) {
      return (CopyOfBuilder) super.userProfile(userProfile);
    }
  }
  

  public static class WalletAccountInfoIdentifier extends ModelIdentifier<WalletAccountInfo> {
    private static final long serialVersionUID = 1L;
    public WalletAccountInfoIdentifier(String id) {
      super(id);
    }
  }
  
}
